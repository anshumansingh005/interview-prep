/*

// 1- This async function will always return a promise

// 2- If it returns a non Promise value then async function will wrap it inside a promise and returns it with fulfilled promise state and Promise result will be that non Promise value

async function getData() {

  // return "Namaste";
  return p;
}
*/

// let dummy = getData();
// console.log(dummy);
/*
[[Prototype]]:Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]:"Namaste"
*/

// 3- If async function doesnt returns anything then automatically promise is returned in fulfilled state nd Promise result is undefined

// ********************************************
/*
const resolvedPromise = new Promise((res, rej) => {
  res("Promise resolved");
});

async function getData() {
  return resolvedPromise; //Can access resolvedPromise because of closure and lexical scope
}

const dataPromise = getData();
dataPromise.then((res) => {
  console.log(res);
});
// consoles>> "Promise resolved";
*/

//*********************************************

/* AWAIT
1- Await can only be used inside async function or it throws Syntax error

2-

*/

// Eg-
// using promises
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved in 5 seconds");
  }, 10000);
});

function promiseFunc() {
  p.then((res) => console.log(res));
  console.log("This will log first then resolved promise will be logged");
}
// promiseFunc();
// logs-  his will log first then resolved promise will be logged
//        Promise resolved in 5 seconds
/* The JS engine doesnt waits for promise fullfillment and logs Synchronous code then prints the promise result */

// using async await
async function awaitFunc() {
  // console.log("Synchronous code before await function");

  const promiseResult = await p;
  // console.log(promiseResult);
  console.log("This will print after 5 seconds");

  const promiseResult2 = await p2;
  // console.log(promiseResult2);
  console.log("This will print after 1 seconds");
}

/* ******************************************** */

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved in 1 seconds");
  }, 1000);
});
awaitFunc();
alert("hell");

// logs-   Promise resolved in 5 seconds
//         This will print after 5 seconds

/*  JS engine waits for 5seconds (for promise fulfillment) then console logs promiseResult and synchronous console code in same time unlike in previous example where we didnt use await */
