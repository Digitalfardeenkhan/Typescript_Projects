import inquirer from "inquirer";
let todos = ["Fardeen", "Faseeh khan"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "Select",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.Select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item...",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        if (ans.Select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item...",
                name: "todo",
            });
            let newTodos = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (ans.Select == "view") {
            console.log(todos);
        }
        if (ans.Select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
