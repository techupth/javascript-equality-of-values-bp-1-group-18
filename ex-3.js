function isPlainObject(value) {
  const isNull = value === null
  const isObject = typeof value === "object" && !isNull;
  const isArray = Array.isArray(value);
  
  if (isObject && !isArray) {
    return true;
  }
  if (isArray || isNull) {
    return false;
  }
  return "This is not an object";
}

const dataType1 = isPlainObject({ type: `object` });
const dataType2 = isPlainObject([1, 2, 3]);
const dataType3 = isPlainObject(null);
const dataType4 = isPlainObject("object");

console.log(dataType1); // true
console.log(dataType2); // false
console.log(dataType3); // false
console.log(dataType4); // This is not an object

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
