# Sort 
- argument of method : รับตัวแปรเป็น function
- argument of Function : ฟังก์ชันรับตัวแปร 2 ตัว 
- return of function 
    - negative : เรียง a,b ตามเดิม
    - positive : สลับ b มาก่อน a
    - zero : ไม่สลับ


- ปัญหาที่เจอบ่อย
    - เรียงเลข [1,2,4,10] ได้เป็น [1,10,2,4] เพราะเรียง 1 มาก่อน
    - เรียงเลบ [5,10] ได้ [10,5]
    - เช็ค String แล้วได้ผลลัพธ์แปลกๆ

```js
function sumAll(arr) {
  const newArr = [...arr]
  let sum = 0
  newArr.sort((a,b)=> {
    return a-b
  })
  let start = newArr[0]
  let end = newArr[newArr.length-1]
  for (let i = start ; i <= end ; i++) {
  sum += i
  }
   return sum
}

sumAll([1, 4]);
```

## Reverse Index
```js
 for (let i = array.length - 1; i >= 0; i--) {
    let currentValue = array[i];
    let lastIndex = array.length - 1;
    let currentIndexReverse = lastIndex - i;
 }
```