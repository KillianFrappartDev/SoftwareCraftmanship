type Item = {
  id: string,
  value: number,
  weight: number
}

/**
 * You can carry a limited weight and you have to fill your bag with the most valuables items.
 * 
 * Time Compexity: 0(n)
 * 
 * @param {Array} items 
 * @param {Number} maxWeight 
 * @returns {Array} Optimal bag organisation containing item ids. 
 */
const knapsack = (items: Item[], maxWeight: number, currentWeight = 0, currentBag: string[] = []): string[] => {

  /**
   * Sort a list of item by their proportional value.
   * 
   * @returns {Array} List of sorted items. 
  */
  const sortByWorth = () => items.sort((a: Item, b: Item) => {
    const computeWorth = (item: Item) => item.value / item.weight;
    if (computeWorth(a) > computeWorth(b)) return -1;
    if (computeWorth(a) < computeWorth(b)) return 1;
    return 0;
  });
 
  /**
   * Find all items that can still be picked.
   * 
   * @param {Number} remaingWeight 
   * @param {Array} currentBag 
   * @returns {Array} List of available items. 
  */
 const findAvailableItems = (remaingWeight: number, currentBag: string[]) => {
   return sortByWorth().filter(item => item.weight <= remaingWeight);
  }
  
  /**
   * Remove most valuable item from list and put it in the current bag.
   * 
   * @param {Item} newItem 
   * @returns {Array} List of remaining items. 
  */
  const addToBag = (newItem: Item) => {
    currentBag.push(newItem.id);
    currentWeight += newItem.weight;
    return items.filter(item => item !== newItem)
  }

  const availableItems = findAvailableItems(maxWeight - currentWeight, currentBag);
  if (!availableItems.length) { return currentBag }
  return knapsack(addToBag(availableItems[0]), maxWeight, currentWeight, currentBag);
}

import assert from 'assert/strict';
describe("Test suite for the knapsack algorithm", () => {
  const itemList = [
    { id: "a", value: 3, weight: 3 },
    { id: "b", value: 6, weight: 8 },
    { id: "c", value: 10, weight: 3 },
    { id: "d", value: 7, weight: 5 },
    { id: "e", value: 14, weight: 2 },
    { id: "f", value: 1, weight: 2 },
    { id: "g", value: 1, weight: 2 },
  ];
  
  it(`Should return the Optimal bag organisation`, () => {
      assert.deepStrictEqual(knapsack(itemList, 5), ['e', 'c']);
      assert.deepStrictEqual(knapsack(itemList, 12), ['e', 'c', 'd', 'f']);
      assert.deepStrictEqual(knapsack(itemList, 0), []);
  })
})
