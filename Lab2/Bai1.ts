// Câu 1
let numberl: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;
const result = numberl + number2;

if (permit) {
    console.log(phrase + result);
}
else {
    console.log('Not show result');
}

// Câu 2
function add(x = 5) {
    let phrase: number | string = "Result is";

    phrase = 10;
    x = 2.8;


    return phrase + x;
}

let result2: number = add();

console.log("Result 2:", result2);

// Câu 3
let person: {
    name: string,
    age: number
} = {
    name: "Typescript",
    age: 11
}
