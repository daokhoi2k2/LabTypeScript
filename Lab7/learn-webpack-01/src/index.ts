import { Student } from "./models/student";
function greeter(person: any) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let student: Student = new Student("Thi", "Hong", "Nguyen");
document.body.innerHTML = greeter(student);
