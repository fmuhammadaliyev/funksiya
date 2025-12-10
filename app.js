// function add(pramas) {
//   return (pramas = "olma");
// }
// const result = "olma";
// console.log(result);

// function name(a, b, c, d) {
//   return (a * b) / c + d;
// }
// result
function add(a) {
  return function (b) {
    return function (d) {
      return function (c) {
        return a * b * d * c;
      };
    };
  };
}

console.log(add(4)(5)(6)(7));
