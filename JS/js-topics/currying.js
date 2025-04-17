// // currying
// function x(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         console.log(a + b + c + d); //local->d:40 closure->c:30 closure->b:20 closure(x)->a:10
//       };
//     };
//   };
// }
// x(10)(20)(30)(40);
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));

const sm1 = sum(1);
const sm2 = sm1(2);
const reslt = sm2(3);
console.log(reslt);
console.log(sm1);
//(b) => {
//  return (c) => {
// return a + b + c;
// };
// }
