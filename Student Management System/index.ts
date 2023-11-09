class School {
    name: string;
    student: student[]=[];
    teachers: Teacher[]=[];

    addStudent(stdObj:student) {
        this.student.push(stdObj)
    }

    addTeacher(teachObj:Teacher) {
        this.teachers.push(teachObj)
    }

    constructor(name:string){
        this.name=name;
    }
}

class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
}

class Teacher extends student {}

let School1 = new School("The City School")
let School2 = new School("Karachi Public School")
let School3 = new School("Beaconhouse Schoool System")

let s1 = new student("Hassan",13,School1.name)
let s2 = new student("Ali",15,School2.name)
let s3 = new student("Shahzaib",16,School3.name) 
let t1 = new Teacher("Hafizullah",35,School1.name)
let t2 = new Teacher("Nazia",32,School2.name)
let t3 = new Teacher("Sarmad",28,School3.name) 

// add student
School1.addStudent(s1);
School2.addStudent(s2);
School3.addStudent(s3);

// add teacher
School1.addTeacher(t1);
School2.addTeacher(t2);
School3.addTeacher(t3);


// console.log(t1);
// console.log(t2);
// console.log(t3); 

console.log(School1);
console.log(School2);
console.log(School3); 
