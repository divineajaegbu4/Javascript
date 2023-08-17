/* It can only affect both function call argument when you
    update or reassign properties but if you update or reassign the
    whole object it will not reflect to others.
 */

const myAccount = {
  name: "Divine",
  expenses: 0,
  income: 0
}

const myChallengeAccount = {
  name: "Joy",
  expenses: 0,
  income: 0
}

myAccount.expenses = 4
//
// myAccount = {
//   name: "Success",
//   expenses: 100,
//   income: 0
// }

const updateAccount = function(account, amount) {
  // account = {
  //   name: "King",
  //   expenses: 4,
  //   income: 3
  // }
  // console.log(account)
//   To update myAccount properties expenses by increasing it by 2.30;
  account.expenses += amount;
  console.log(account);
}

updateAccount(myAccount, 2.35);
console.log(myAccount);


//Challenge Area
console.log("updated values: -----------------------");
const addExpenses = function(account, amount) {
   account.expenses += amount;
}

const addIncome = function(account, amount) {
   account.income += amount;
}

const resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
}

const getAccountSummary = function(account) {
  let accountSummary = account.income - account.expenses;
  return `Account for ${account.name} has $${accountSummary}. $${account.income} in income. $${account.expenses} in expenses.`
}


addExpenses(myChallengeAccount, 100);
console.log("expenses: ", myChallengeAccount.expenses);

addIncome(myChallengeAccount, 1000);
console.log("income: ", myChallengeAccount.income);

let getAccountSummaryValue1 = getAccountSummary(myChallengeAccount);
console.log("getAccountSummary: ", getAccountSummaryValue1);

console.log("reset: ------------");

resetAccount(myChallengeAccount)

console.log("resetExpenses: ", myChallengeAccount.expenses);

console.log("resetIncome: ", myChallengeAccount.income);

let getAccountSummaryValue = getAccountSummary(myChallengeAccount);

console.log("resetGetAccountSummary: ", getAccountSummaryValue);



