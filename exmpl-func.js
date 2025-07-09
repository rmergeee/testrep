function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function sumOfTripledEvensV2(array) {
  const filtredArray = array.filter(n => n % 2 === 0);
  const tripledArray = filtredArray.map(n => n * 3);
  return tripledArray.reduce((acc, curr) => acc + curr, 0);
}

function sumOfTripledEvensV3(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfTripledEvensV2(arr));
console.log(sumOfTripledEvens(arr));

function camelize(str) {
  return str
            .split("-")
            .map( (word, index) => index == 0 ? word : word
              .charAt(0)
              .toUpperCase() + word.slice(1)
            )
            .join("");
}

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function copySorted(arr) {
  let newArr = arr.slice();
  return newArr.sort((a, b) => a.localeCompare(b))
}

function unique(arr) {
  let uniqueArr = [];
  for (let str of arr) {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  }
  return uniqueArr;
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
  "Привіт", "Привіт", "Світ", "Світ", ":-O"
];
console.log(unique(strings));