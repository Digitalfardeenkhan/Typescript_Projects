import inquirer from "inquirer";
import { faker } from "@faker-js/faker/locale/af_ZA";
const createUser = () => {
    let Users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: 1,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 1000000 * i,
        };
        Users.push(user);
    }
    return Users;
};
// atm Machine
const atmMachine = async (Users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "Write pin code",
        name: "pin",
    });
    const user = Users.find((val) => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    console.log("Invalid user pin");
};
// atm function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "What do you want?",
        choices: ["Withdraw", "Balance", "Deposit", "Exit"]
    });
    if (ans.select == "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "enter amount..",
            name: "rupee",
        });
        if (amount.rupee > user.balance) {
            return console.log("You've insuffucient Balance");
        }
        if (amount.rupee > 40000) {
            return console.log("Your can't withdraw more than 40000");
        }
        console.log(`Withdraw amount: ${amount.rupee}`);
        console.log(`Balance: ${user.balance - amount.rupee}`);
    }
    if (ans.select == "Balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.select == "Deposit") {
        const Deposit = await inquirer.prompt({
            type: "number",
            message: "Enter your deposit amount",
            name: "rupee",
        });
        console.log(`Deposit amount: ${Deposit.rupee}`);
        console.log(`Total balance: ${user.balance + Deposit.rupee}`);
    }
    if (ans.select == "Exit") {
        console.log("Thankyou for using ATM");
    }
};
const Users = createUser();
atmMachine(Users);
