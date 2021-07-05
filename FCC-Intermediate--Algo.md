
[2.Diff Two Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays)
```js
function diffArray(arr1, arr2) {
  const newArr = [...arr1,...arr2];
   
 return newArr.filter((e)=> !arr1.includes(e) || !arr2.includes(e))  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

```

```js
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

```
