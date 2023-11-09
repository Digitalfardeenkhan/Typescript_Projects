import inquirer from 'inquirer';
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph here...",
            name: "Paragraph"
        });
        console.log(counter(res.Paragraph));
    } while (true);
}
startWordCount(counter);
