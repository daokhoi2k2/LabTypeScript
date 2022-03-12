// Câu 1
enum Role { Admin, ReadOnly, AUTHOR }
const person4: {
    name: string,
    age: number,
    hobbies: string[],
    role: string | number,
    roletuple: any
} = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sport', 'Cooking'],
    role: Role.Admin,
    roletuple: [2, "Author"]
}

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if(person4.role === Role.AUTHOR) {
    console.log("is author");
}

person4.roletuple.push("admin");
person4.roletuple[1] = 10;
person4.roletuple = [0, 'Admin', 'user'];

console.log(person4.name);