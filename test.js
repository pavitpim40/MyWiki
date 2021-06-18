function sumAll(arr) {
  const newArr = [...arr];
  let sum = 0;
  newArr.sort();
  let start = newArr[0];
  let end = newArr[newArr.length - 1];
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
