const url = "https://api.github.com/users/anshumansingh005";
const user = fetch(url);
console.log(user);
// logs   Promise {<pending>}
//          > [[Prototype]]: Promise
//          > [[PromiseState]]: "fulfilled"
//          > [[PromiseResult]]: Response

// A promise is an object which represent the eventual completion of an asynchronous operation

/*
    Promise shows pending yet the state shows fulfilled.
    1- When line 2 runs, it initates a asynchronous network call and it returns the current state of the promise which is pending.

    2- That is because flow of program doesnt waits for the completion of fetch call and moves forward.

    3- Later when line-3 executes, the asynchronous fetch call must likely still work in progress. So it consoles logs the Promise state "pending"

    4-After succesfull network call, the promise which was returned in pending state transitions to fullfilled state.

    5- The response of promise is stored in [[PromiseResult]]
*/

const response = user.then((res) => {
  // console.log(`Response - ${res}`);
  return res.json();
});

console.log(response);
const responseData = response.then((data) => {
  console.log(`Data Received - ${data}`);
});
console.log(responseData);

// // Promise Chaining
// const cart = ['item1', 'item2','item3','item4']

// function createOrder(cart, fn){
//   return new Promise(()=>{console.log('Dummy function');
//   })
// }
// // Old way
// createOrder(cart, function (orderId){
//   proceedToPayment(orderId, function(paymentInfo){
//     showOrderSummary(paymentInfo, function(){
//       updateWalletBalance()
//     })
//   })
// }
// // Via promise Chaining
// const promise = createOrder(cart)

// promise(cart) //returns a promise which can be
// .then(function(orderId){
//   proceedToPayment(orderId)
// })
// .then(function(orderId){
//   showOrderSummary(orderId)
// })
