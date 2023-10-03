function isPlainObject(dataType){
  if (Array.isArray(dataType) === true || dataType === null){ // เช็คว่าเป็น array หรือ null ไหม ถ้าเป็นอย่างใดอย่างหนึ่งเป็น false
      return false
  } else if (typeof dataType === 'object'){ // เช็คว่าเป็น object ไหม ถ้าเป็น true
          return true 
  } else {
      return "This is not an object" // ถ้าไม่เข้าเงื่อนไขด้านบนเลย จะตอบว่า "This is not an object"
  
  }
}




console.log(isPlainObject(null))
console.log(isPlainObject(["apples", "oranges"]))
console.log(isPlainObject({ name: "John" }))
console.log(isPlainObject(1))
console.log(isPlainObject("one"))


let test1 = "we"
console.log(typeof(test1))