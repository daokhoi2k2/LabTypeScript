var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["ReadOnly"] = 1] = "ReadOnly";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person4 = {
    name: "Typescript",
    age: 11,
    hobbies: ["Sport", "Cooking"],
    role: Role.Admin,
    roletuple: [2, "Author"]
};
var favouriteActivites;
favouriteActivites = [5, "Sports", true];
if (person4.role === Role.AUTHOR) {
    console.log("is author");
}
person4.roletuple.push("admin");
person4.roletuple[1] = 10;
person4.roletuple = [0, "Admin", "user"];
console.log(person4.name);
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" &&
        typeof input2 === "number" &&
        resultConversion === "as-number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumber = combine(30, 26, "as-number");
console.log(combineNumber);
var combineStringNumber = combine("30", "26", "as-number");
console.log(combineStringNumber);
var combineText = combine("Typescript Vs ", "Javascript", "as-text");
console.log(combineText);
var a = null;
console.log(a);
console.log(typeof a);
var b;
console.log(b);
console.log(typeof a);
var undeclaredVar;
console.log(undeclaredVar);
var userInput;
var userName;
userInput = 5;
userInput = 'Typescript';
if (typeof userInput === "string") {
    userName = userInput;
}
userName = userInput;
