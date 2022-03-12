// Câu 1
enum Role {
  Admin,
  ReadOnly,
  AUTHOR,
}
const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: number; // Đổi string thành number vì Enum được khai báo ở trên sẽ lưu key dạng number
  roletuple: any; // Đổi thành any vì cấu trúc từ tuple này không theo trình tự
} = {
  name: "Typescript",
  age: 11,
  hobbies: ["Sport", "Cooking"],
  role: Role.Admin,
  roletuple: [2, "Author"],
};

let favouriteActivites: any[];
favouriteActivites = [5, "Sports", true];

if (person4.role === Role.AUTHOR) {
  console.log("is author");
}

person4.roletuple.push("admin");
person4.roletuple[1] = 10;
person4.roletuple = [0, "Admin", "user"];

console.log(person4.name);

// Câu 2
type Combinable = number | string;
function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" && // Sửa dấu || thành dấu &&
    resultConversion === "as-number"
  ) {
    // Xóa parseFloat ở đây
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combineNumber = combine(30, 26, "as-number");
console.log(combineNumber);
const combineStringNumber = combine("30", "26", "as-number");
console.log(combineStringNumber);
const combineText = combine("Typescript Vs ", "Javascript", "as-text");
console.log(combineText);

// Câu 3
//Variable declared and assigned to null
var a = null;
console.log(a);
console.log(typeof a);
//Variable declaration without assigning any value to it
var b;
console.log(b);
console.log(typeof a);

var undeclaredVar; // Với typescript biến chưa được định nghĩa sẽ không thể gọi như javascript.
console.log(undeclaredVar);

// Câu 4
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Typescript';

// Nếu là unkown trước khi gán biến phải kiểm tra kiểu của nó thì mới không bị lỗi
/* Before */
// userName = userInput;

/* After */
if(typeof userInput === "string") {
  userName = userInput;
}
/* End */

userName = <string> userInput;