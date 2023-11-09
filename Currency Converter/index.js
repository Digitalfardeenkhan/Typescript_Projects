import chalk from 'chalk';
import inquirer from 'inquirer';
// Currency Converter API Link
let apilink = "https://v6.exchangerate-api.com/v6/23d70cdf05bc03d7e9061eba/latest/PKR";
// Fetching Data
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apilink);
// Object to array
let countries = Object.keys(data);
// User input first country
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting from",
    choices: countries,
});
// first country money
let userMoney = await inquirer.prompt({
    type: "number",
    name: "rupee",
    message: `Please enter the amount in ${chalk.greenBright.bold(firstCountry.name)}`,
});
// Convert Country
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting To",
    choices: countries,
});
// Conversion rate
let cnv = `https://v6.exchangerate-api.com/v6/23d70cdf05bc03d7e9061eba/pair/${firstCountry.name}/${secondCountry.name}`;
// fetching data for conversion rate
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rates;
};
let conversionRate = await cnvData(cnv);
let convertedRate = userMoney.rupee * conversionRate;
console.log(`Your ${chalk.bold.greenBright(firstCountry.name)} ${chalk.bold.greenBright(userMoney.rupee)} 
            in ${chalk.bold.greenBright(secondCountry.name)} is ${chalk.bold.greenBright(convertedRate)}`);
