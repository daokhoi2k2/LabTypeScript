function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger2("LOGGING - PERSON")
class Person2 {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

const p1 = new Person2();