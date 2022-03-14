// câu 1
const total = (...array: number[]) : number => {
    const result: number = array.reduce((total, cur) => {
        return total += cur;
    }, 0);

    return result;
}

// console.log(total(3, 5, 9, 2))

// câu 2
const sum = (a: number = 0, b?: number, ...array: number[]) => {
    if(!a && !b) return a;

    let result: number = 0;
    if(array) {
        result = array.reduce((total, cur) => {
            return total += cur;
        }, 0);
    }

    return a + b + result;
}

console.log(sum(3, 5, 3, 5));

// câu 3
const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking']; 
// activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
// console. log(activehobbies);