// Câu 1
let sum2 = (x: number = 5, y?: number) => {
  return x + <number>y;
};

let speech = (output: any): void => {
  console.log("Result:" + output);
};

speech(sum2(5, 12));
console.log(speech(sum(8, 5)));

// Câu 2
let something: void = undefined;
let nothing: void = null; // Kiểu never sẽ không được trả về bất kỳ cái gì 


function throwError(errorMsg: string): never {
    throw new Error(errorMsg);   
}

console.log(throwError("ASD"));

// Câu 3
function AddandHandle (x: number, y: number, cb:(num:number)=>void){
    const result = x + y; 
    cb(result);
}

AddandHandle(10, 20, (result) => { console. log(result); })