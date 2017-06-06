S = [-1, 0, 1, 2, -1, -4];

function hasDuplicates(array) {}

function findUniqueTriplets(arr) {
  arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
  var result = [];
for (var i = 0; i < arr.length ; i++) {
  var a = arr[i];
  var b = i+1;
  var c = arr.length-1;
  while (b < c) {
    triplet_sum = a + arr[b] + arr[c]
    if (triplet_sum === 0) {
       var array = [];
       array.push(a);
       array.push(arr[b]);
       array.push(arr[c]);
      if (result.length > 0) {
        for (var j = 0; j < result.length; j++) {
          if (array.join() !== result[j].join()) {
            console.log("array-join", array.join());
            console.log("result-join", result[j].join());
            result.push(array);
            // console.log("test", result);
          }
        }
      } else {
        result.push(array);
      }
      console.log("array:", array);
      console.log("result:", result);
      c -= 1;
    } else if (triplet_sum > 0) {
     c -= 1;
    } else {
     b += 1;
    }
  }
}
  return result;
}

var x = findUniqueTriplets(S);

// console.log(x);












