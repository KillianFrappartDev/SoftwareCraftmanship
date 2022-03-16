/*
==> You can carry a limited weight and you have to fill your bag with the most valuables items.
Params: Array of items with value and weight && maximum weight.
Output: Optimal bag organisation. 
*/

const itemList = [
  { id: "a", val: 3, w: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 10, w: 3 },
  { id: "d", val: 7, w: 5 },
  { id: "e", val: 14, w: 2 },
  { id: "f", val: 1, w: 2 },
  { id: "g", val: 1, w: 2 },
];

function opt(items, maxWeight) {
  const result = [];
  const remainingItems = [];
  let currentWeight = 0;

  for (const item of items) {
    const proportionalValue = item.val / item.w;
    result.push({ id: item.id, value: proportionalValue, weight: item.w });
  }

  orderList(result);

  setWeight();

  while (currentWeight > maxWeight) {
    remainingItems.push(result[result.length - 1]);
    result.pop();
    currentWeight = 0;
    setWeight();
  }

  orderList(remainingItems);

  if (maxWeight - currentWeight > 0) {
    for (const item of remainingItems) {
      if (item.weight <= maxWeight - currentWeight) {
        result.push(item);
        remainingItems.pop(item);
        break;
      }
    }
  }

  return result;

  function orderList(list) {
    for (let outer = 0; outer < list.length; outer++) {
      let outerEl = list[outer];

      for (let inner = outer + 1; inner < list.length; inner++) {
        let innerEl = list[inner];

        if (outerEl.value < innerEl.value) {
          list[outer] = innerEl;
          list[inner] = outerEl;

          outerEl = list[outer];
          innerEl = list[inner];
        }
      }
    }
  }

  function setWeight() {
    for (const item of result) {
      currentWeight += item.weight;
    }
  }
}

console.log(opt(itemList, 12));
