import inquirer from "inquirer";
import chalk from "chalk";
// We create classes of Player and Opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Player name & opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.red.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel ins ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.red.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel ins ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack", "Drink portion", "Run for your life..."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.red.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel ins ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life...") {
            console.log(chalk.bold.red.italic("You loose, Better luck Next Time"));
            process.exit();
        }
    }
} while (true);
