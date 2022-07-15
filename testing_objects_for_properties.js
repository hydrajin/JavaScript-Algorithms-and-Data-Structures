function checkObj(obj, checkProp) {
  // Only change code below this line

  if (!obj.hasOwnProperty(checkProp)) {
    return "Not Found";
  } else {
    return obj[checkProp];
  }
  // Only change code above this line
}
