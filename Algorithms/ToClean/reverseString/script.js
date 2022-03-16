/*
Reverse a string without Array.reverse()
Params: String
Output: reversed string.
*/

const reverse = (str) => {
  const arr = str.split('');
  const resultArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    resultArr.push(arr[i]);
  }

  const resultStr = resultArr.join('');
  console.log(resultStr);
};

reverse('jake');
reverse('how are you doing?');
