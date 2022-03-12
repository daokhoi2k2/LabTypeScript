var numberl = 5;
var number2 = 2.8;
var phrase = 'Result is ';
var permit = true;
var result = numberl + number2;
if (permit) {
    console.log(phrase + result);
}
else {
    console.log('Not show result');
}
function add(x) {
    if (x === void 0) { x = 5; }
    var phrase = "Result is";
    phrase = 10;
    x = 2.8;
    return phrase + x;
}
var result2 = add();
console.log("Result 2:", result2);
var person = {
    name: "Typescript",
    age: 11
};
