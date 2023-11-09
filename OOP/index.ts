import inquirer from "inquirer";

class Student {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    do {
        console.log("Welcome guest");

        const ans = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: "Ap kis sa bat karna pasand karenga...",
            choices: ["MySelf", "Student"],
        });

        if (ans.Select == "MySelf") {
            console.log("Hello, I'm talking to myself");
            console.log("I'm feeling well");
        }

        if (ans.Select == "Student") {
            const studentNameAnswer = await inquirer.prompt({
                type: "input",
                name: "studentName",
                message: "Apko kis Student sa bat krni ha..",
            });

            const student = persons.students.find((val) => val.name == studentNameAnswer.studentName);

            if (!student) {
                const newStudent = new Student(studentNameAnswer.studentName);
                persons.addStudent(newStudent);

                console.log(`Hello i am ${newStudent.name}, and i am fine`);
                console.log(persons.students);
            } else {
                console.log(`Hello i am ${student.name}, and i am fine`);
                console.log(persons.students);
            }
        }
    } while (true);
};

programStart(persons);
