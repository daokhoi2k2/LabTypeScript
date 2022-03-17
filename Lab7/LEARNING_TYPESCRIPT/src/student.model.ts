class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get Info() {
        return `Tên: ${this.name} - tuổi: ${this.age}`;
    }
}

export default Student;