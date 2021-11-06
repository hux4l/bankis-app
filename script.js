'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// for each movement create a new element
const displayMovements = function (movements) {
  // clear the container
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    // checks if movement is positive or negative
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // create element for each movement
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type.toLocaleUpperCase()}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    // adds element to the container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// function that creates username from bank account owner name
// modified from all accounts, gets the owner name and adds username property to the account object with value
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
        .toLocaleLowerCase()
        .split(' ')
        .map((letter) => letter[0])
        .join('');
  });
  // return user.toLocaleLowerCase().split(' ').map((letter) => letter[0]).join('');
};

createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  const sum = acc.movements.reduce((a, b) => a + b, 0);
  labelBalance.innerHTML = `${sum}€`;
}

const calcDisplaySummary = function (acc) {
  const sumIn = acc.movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.innerHTML = `${sumIn}€`;
  const sumOut = acc.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.innerHTML = `${Math.abs(sumOut)}€`;
  const sumInterest = acc.movements
      .filter((mov) => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
  labelSumInterest.innerHTML = `${(sumInterest)}€`;
}

// calcDisplayBalance(account1);
// calcDisplaySummary(account1);

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.innerHTML = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // display movements
    displayMovements(currentAccount.movements);
    // display balance
    calcDisplayBalance(currentAccount);
    // display summary
    calcDisplaySummary(currentAccount);
    console.log('login');
  } else {

  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*


// arrays are objects, so they have functions

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, -1));
console.log(arr.slice(-2));

// splice
// changes original array
// console.log(arr.splice(2));   // splices values, returns spliced values, deletes values from arr
console.log(arr.splice(-1));
console.log(arr);

// reverse, it changes the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
// concatenate array, merge them together, dont change the original arrays
const letters = arr.concat(arr2)
console.log(letters);

// join
// joins them together, dont change the original arrays
console.log(letters.join(' - '));

*/


// for each with arrays
/*

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i+1}: You deposited ${movement}`)
  } else {
    console.log(`${i+1}: You withdrew ${Math.abs(movement)}`);
  }
}

// for each looping
// cant break or continue out from the loop
console.log('------- FOREACH --------')
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`${i+1}: You deposited ${mov}`)
  } else {
    console.log(`${i+1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

/*


// Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'GBP']);
console.log(currenciesUnique);

// key is the same as values
currenciesUnique.forEach(function (value, _value, map) {
  console.log(`${value}`);
});
*/


// map, filter and reduce

// map the array an apply a function to each element
// returns a new array containing results of the function

// filter the array and apply a function to each element
// returns a new array containing elements that pass the test

// reduce the array and apply a function to each element
// returns a single value (adding all elements together etc...)

const eurToUsd = 1.1;

// converts all movements to USD
const usd = movements.map(mov => mov * eurToUsd);

// console.log(movements)
// console.log(usd);

// const movementsUSD = [];
// for (const mov of movements) {
//   movementsUSD.push(mov * eurToUsd);
// }
//
// console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {

  const type = mov > 0 ? 'deposited' : 'withdrew';
  return `${i+1}: You ${type} ${mov}`;

  // if (mov > 0) {
  //   return `${i+1}: You deposited ${mov}`;
  // } else {
  //   return `${i+1}: You withdrew ${Math.abs(mov)}`;
  // }
})
// console.log(movementsDescriptions);


// compute usernames, with their initials
const user = account3.owner;
// creates username from initials

// filter method
// filters deposits that we dont see the withdraws only deposits, returns a new array
const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// };
// console.log(depositsFor);

// array of all withdraws
const withdrawals =  movements.filter((mov, i, array) => mov < 0);
// console.log(withdrawals);


// reduce method
// get the array to single value
// first is accumulator = 0 (gets increased each loop by the chosen +/-/*/), second is current value, third is index, fourth is array
const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
// console.log(balance)

// Maximum value from movements
// const max = movements.reduce((acc, curr, i, arr) => Math.max(acc, curr), 0);
const max = movements.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
})
// console.log(max);

// chaining methods, pipeline, its hard to debug
const movUsd = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
      // console.log(arr);
      return mov * eurToUsd;
    })
    .reduce((acc, curr) => acc + curr, 0);
// console.log(movUsd);

// find method
// dont returns an array, returns only first value it finds

// console.log(movements.find(mov => mov < 0));

// console.log(accounts);

// finds account with owner name 'Jessica Davis'
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

const accountFor = function findAccount(accounts) {
  for (const acc of accounts) {
    if (acc.owner === 'Jessica Davis') {
      return acc;
    }
  }
}

// console.log(accountFor(accounts));
