module.exports = function greaterthan(arr, index) {
  var newArr = [];
  for (let i = index + 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
