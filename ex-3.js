function isPlainObject(value) {
  if (value === null) {
    return false; 
  } else if (typeof value === 'object') {
    return true; 
  } else if (Array.isArray(value)) {
    return false; 
  } else {
    return "This is not an object"; 
  }
}
console.log(isPlainObject(null));