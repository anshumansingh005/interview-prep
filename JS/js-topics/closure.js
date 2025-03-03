// //
// console.log("Closure practice");

// var a = 10;
// function outest() {
//   var b = 20;
//   function outer() {
//     var c = 30;
//     function inner() {
//       // debugger;
//       console.log(a);
//       console.log(b);
//       console.log(c);
//     }
//     inner();
//   }
//   outer();
// }
// outest();

// function x(c) {
//   var a = 20;
//   function y() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   a = 10;
//   let b = 30;
//   // debugger;
//   return y;
// }
// x(40)(); //10 30 40
// var z = x();
// z(); //10  30  undefined
// function x(a) {
//   //a = 10
//   return function (b) {
//     //20
//     return function (c) {
//       //30
//       return function (
//         d //40
//       ) {
//         console.log(a + b + c + d);
//       };
//     };
//   };
// }
// x(10)(20)(30)(40);
// once function
// function once(fun, val) {
//   let hasRun = false;
//   return function () {
//     if (!hasRun) {
//       fun(val);
//       hasRun = true;
//     }
//   };
// }
// const runOnce = once(function (val) {
//   console.log(`Will run only ${val} time`);
// }, 1);
// runOnce();
function one(fun) {
  let hasRun = false;
  return function () {
    if (!hasRun) {
      fun();
      hasRun = true;
    }
  };
}
let run = one(() => {
  console.log("ran first time");
});
run();
console.log("hi");

run(); //Although each call to run() creates a new execution context for that particular invocation, the closure attached to run continues to reference the same hasRun variable created during the initial call to one(). This shared variable retains its value between function calls, which is why it remains set to true during subsequent invocations.
