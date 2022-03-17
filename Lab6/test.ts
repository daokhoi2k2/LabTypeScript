// function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

// @classDecorator
// class Greeter {
//   property = "property";
//   hello: string;
//   constructor(m: string) {
//     this.hello = m;
//   }
// }

// const hello = new Greeter("Hello World");
// console.log(hello);
const enumerable = (value: boolean) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    propertyDescriptor.enumerable = value;
  };
};

class Person4 {
  firstName: string = "Jon";
  lastName: string = "Doe";

  @enumerable(true)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const ps5 = new Person4();
console.log(ps5.getFullName())