function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

const accounts = [];
const btn = document.querySelector('#btn');
const name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const form = document.querySelector('#accountForm');
console.log('Begins');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(name.value, ' ', +amount.value);
  const newAccount = new BankAccount(name.value, amount.value);
  accounts.push(newAccount);
  console.log(accounts, 'Ends');

});

