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