"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./models/student");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let student = new student_1.Student("Thi", "Hong", "Nguyen");
document.body.innerHTML = greeter(student);
