var user1;
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (msg) {
        console.log(msg);
    };
    return Person;
}());
user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
