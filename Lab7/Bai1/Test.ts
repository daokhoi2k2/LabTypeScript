import validate from "./StaticZipCodeValidator";
import { StringValidator, mainValidator, RegExpBasedZipCodeValidator } from "./AllValidators";
let strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach ((s) => {
  console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
});

// const type: StringValidator = {
//     isAcceptable: (value) => {
//         console.log(value)
//         return true;
//     }
// }

// console.log(RegExpBasedZipCodeValidator)
// console.log(mainValidator)