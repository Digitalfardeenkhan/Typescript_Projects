import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
// Customer class
class Customer {
    firstName;
    lastName;
    age;
    Gender;
    mobNumber;
    accNumber;
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.Gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}
// Class Bank
class Bank {
    customer = [];
    account = [];
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let newAccounts = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...newAccounts, accObj];
    }
}
let myBank = new Bank();
// Customer Create
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName('male');
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number("3##########"));
    const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
// Bank Functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: "Please Select the Service",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
        });
        // View Balance
        if (service.Select == "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} your Account balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
            }
        }
        // Cash Withdraw
        if (service.Select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Amount.",
                    name: "rupee",
                });
                if (ans.rupee > account.balance) {
                    console.log(chalk.red.bold("You've insufficient balance.."));
                }
                let newBalance = account.balance - ans.rupee;
                // Transaction method
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        // Cash Deposit
        if (service.Select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Amount.",
                    name: "rupee",
                });
                let newBalance = account.balance + ans.rupee;
                // Transaction method
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.Select == "Exit") {
            return;
        }
    } while (true);
}
bankService(myBank);
