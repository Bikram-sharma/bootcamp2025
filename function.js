function reverseString(str) {
  return str.split("").reverse().join("");
}

function replace(str, charToReplace, strReplacement) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] == charToReplace) {
      result += strReplacement;
    } else {
      result += str[i];
    }
  }
  return result;
}
