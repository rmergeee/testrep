function add7(num) {
  return num + 7;
}

function add8(num) {
  if (typeof(num) == typeof(4)) {
    return num + 8;
  }
}

let multiply = function(num1, num2) {
  return num1 * num2;
}

let capitalize = str => str.toUpperCase().substr(0,1);

let lastLetter = str => str.slice(-1);

console.log(add7(4));

console.log(add8(4));

console.log(typeof(4))

console.log(multiply(2,2));

console.log(capitalize("String"));

console.log(lastLetter("String"));