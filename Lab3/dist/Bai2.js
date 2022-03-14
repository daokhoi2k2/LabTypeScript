var sum2 = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var speech = function (output) {
    console.log("Result:" + output);
};
speech(sum2(5, 12));
console.log(speech(sum(8, 5)));
var something = undefined;
var nothing = null;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
console.log(throwError("ASD"));
function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (result) { console.log(result); });
