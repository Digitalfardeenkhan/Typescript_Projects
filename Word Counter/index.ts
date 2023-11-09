import inquirer from 'inquirer'

const counter = (paragraph:string) => paragraph.replace(/\s/g, "").length

async function startWordCount(counter:(text:string)=>number) {
     do{
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph here...",
            name: "Paragraph"
         })
         console.log(counter(res.Paragraph)) 
     }
     while(true)
}

startWordCount(counter)