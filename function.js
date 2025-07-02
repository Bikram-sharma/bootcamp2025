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

function alternateSqSum(arr) {
  // happy coding :D
  if (arr.length == 0) return 0;

  return arr.reduce((a, n, i) => ((i + 1) % 2 === 0 ? a + n * n : a + n), 0);
}

function isAValidMessage(message) {
  if (!message.length) return true;
  if (!isNaN(message.slice(-1)) || isNaN(message[0])) return false;

  let messageArray = [];
  let char = "";
  let num = "";

  for (let i = 0; i < message.length; i += 1) {
    if (isNaN(message[i])) {
      num.length ? messageArray.push(num) : "";
      num = "";
      char += message[i];
    } else {
      char.length ? messageArray.push(char) : "";
      char = "";
      num += message[i];
    }
  }
  num.length ? messageArray.push(num) : "";
  char.length ? messageArray.push(char) : "";

  for (let j = 0; j < messageArray.length; j += 2) {
    let length = messageArray[j];
    if (+length !== messageArray[j + 1].length) return false;
  }
  return true;
}

const last = (xs) => (xs.length ? xs[xs.length - 1] : null);

function group(arr) {
  if (!arr.length) return [];

  const result = [];
  const seen = new Set();

  arr.forEach((num) => {
    if (!seen.has(num)) {
      const group = arr.filter((x) => x === num);
      result.push(group);
      seen.add(num);
    }
  });

  return result;
}

function zipvalidate(postcode) {
  if (!postcode.length || postcode.length !== 6) return false;
  if ("05789".includes(postcode[0]) || isNaN(postcode)) return false;
  return true;
}

function productArray(numbers) {
  //your code here
  let result = [];
  numbers.forEach((num, index) => {
    const array = [...numbers];
    array.splice(index, 1);
    let value = array.reduce((a, n) => a * n, 1);
    result.push(value);
  });
  return result;
}

function parseF(input) {
  const num = Number(input);

  if (typeof input === "boolean") {
    return null;
  }

  if (typeof input === "object" && input !== null) {
    return null;
  }

  if (typeof input === "string") {
    if (input.trim() === "") {
      return null;
    }
  }

  if (isNaN(num) || !isFinite(num)) {
    return null;
  }

  return Number(num.toFixed(1));
}
