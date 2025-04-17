const url = "https://api.github.com/users/anshumansingh005";
const user = fetch(url);
console.log(user);

// A promise is an object which represent the eventual completion of an asynchronous operation

const response = user.then((res) => {
  console.log(`Response - ${res}`);
  return res.json();
});
console.log(response);
const responseData = response.then((data) => {
  console.log(`Data Received - ${data}`);
  return data;
});
console.log(responseData);


// Promise Chaining
const cart = ['item1', 'item2']

function createOrder(cart, fn){
  return new Promise(()=>{console.log('Dummy function');
  })
}
// Old way
createOrder(cart, function (orderId){
  proceedToPayment(orderId, function(paymentInfo){
    showOrderSummary(paymentInfo, function(){
      updateWalletBalance()
    })
  })
}
// Via promise Chaining
const promise = createOrder(cart)

promise(cart) //returns a promise which can be
.then(function(orderId){
  proceedToPayment(orderId)
})
.then(function(orderId){
  showOrderSummary(orderId)
})