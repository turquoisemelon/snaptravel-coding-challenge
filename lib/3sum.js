
const filterDublicates = (arr) => {
  const seen = {};
  return arr.filter((item) => {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

const findUniqueTriplets = (arr) => {
  arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
  const result = [];
  for (let i = 0; i < arr.length ; i++) {
    let a = arr[i];
    let b = i+1;
    let c = arr.length-1;
    while (b < c) {
      triplet_sum = a + arr[b] + arr[c]
      if (triplet_sum === 0) {
        const array = [];
        array.push(a);
        array.push(arr[b]);
        array.push(arr[c]);
        result.push(array);
        c -= 1;
      } else if (triplet_sum > 0) {
        c -= 1;
      } else {
        b += 1;
      }
    }
  }
  return filterDublicates(result);
}

module.exports = filterDublicates;
module.exports = findUniqueTriplets;

S = [-1, 0, -2, 2, -1, -5, 10, -10, 3, -4];
x = findUniqueTriplets(S);
console.log(x)












