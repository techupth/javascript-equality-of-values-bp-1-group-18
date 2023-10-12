function isPlainObject(value) {
  if (value==='Object') {
    return true
  }
  else if(value ===null) {
    return false
  }
  else if (value===Array.isArray(value))
  {
    return false
  }
  else 
  {
    return "This is not an object"
  } 
  }

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
