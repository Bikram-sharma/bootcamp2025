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

function stringLengthEven(str) {
  return str.length % 2 == 0;
}

function findRabbit(arr) {
  return arr.map((word) => word.toLowerCase()).indexOf("rabbit");
}

function compoundArray(a, b) {
  // Your code here
  let result = [];

  let length = Math.max(a.length, b.length);

  for (let i = 0; i < length; i += 1) {
    a[i] !== undefined ? result.push(a[i]) : "";
    b[i] !== undefined ? result.push(b[i]) : "";
  }
  return result;
}
