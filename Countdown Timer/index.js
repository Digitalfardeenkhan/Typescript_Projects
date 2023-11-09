import { differenceInSeconds } from 'date-fns';
import inquirer from 'inquirer';
async function getUserInput() {
    const res = await inquirer.prompt({
        type: "input",
        name: "userInput",
        message: "Please enter the amount of seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number";
            }
            else if (input <= 0 || input > 3600) {
                return "Please enter a number between 1 and 3600 seconds";
            }
            else {
                return true;
            }
        },
    });
    return parseInt(res.userInput, 10);
}
async function startCountdown() {
    const input = await getUserInput();
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + input);
    const timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(endTime, currentTime);
        if (timeDiff <= 0) {
            clearInterval(timerInterval);
            console.log("Time has expired");
            process.exit();
        }
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        console.clear(); // Clear the console to update the countdown timer
        console.log(`Time left: ${minutes} minutes and ${seconds} seconds`);
    }, 1000);
}
startCountdown();
