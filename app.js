// function add(pramas) {
//   return (pramas = "olma");
// }
// const result = "olma";
// console.log(result);

// function name(a, b, c, d) {
//   return (a * b) / c + d;
// }
// result
// function add(a) {
//   return function (b) {
//     return function (d) {
//       return function (c) {
//         return a * b * d * c;
//       };
//     };
//   };
// }

// console.log(add(4)(5)(6)(7));
// calac funksiyasi
function calac(total = null, op = null) {
  return function (token) {
    if (token === "=") return total; // tugadi

    // Raqam bo‘lsa
    if (typeof token === "number") {
      if (total === null) total = token; // birinchi son
      else if (op === "+") total += token;
      else if (op === "-") total -= token;
      else if (op === "*") total *= token;
      else if (op === "/") total /= token;

      op = null; // amal bajarildi
      return calac(total, op); // zanjirni davom ettiramiz
    }

    // Amal bo‘lsa
    op = token;
    return calac(total, op); // yana yangi bosqich
  };
}
const c = calac();

const natija = c(1000)("+")(500)("+")(200)("=");
console.log(natija); // 1700
