// import external modules first
require("dotenv").config()

// import your local classes, objects, or functions second
const { BankAccount, Transaction } = require("./bankAccountClasses")

// declare global variable third
const apiKey = process.env.API_KEY
const bankAccount1 = new BankAccount(888, "Roger Rabbit")
const transaction1 = new Transaction(45, "Betty Boo")
bankAccount1.transactions.push(transaction1)

// Build your program fourth
console.log(bankAccount1)
console.log(transaction1)
console.log(bankAccount1.transactions)
console.log(apiKey)

// export any modules last
