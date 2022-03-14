interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
    public name?: string;
    public outputName?: string;

    greet(msg) {
        console.log(msg);
    }
}

user1 = new Person();
// user1.name = 'Manu'; // Readonly không set được value
user1.greet("Hi there - I am");
console.log(user1);
