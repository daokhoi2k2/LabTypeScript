var total = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var result = array.reduce(function (total, cur) {
        return total += cur;
    }, 0);
    return result;
};
var sum = function (a, b) {
    if (a === void 0) { a = 0; }
    var array = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        array[_i - 2] = arguments[_i];
    }
    if (!a && !b)
        return a;
    var result = 0;
    if (array) {
        result = array.reduce(function (total, cur) {
            return total += cur;
        }, 0);
    }
    return a + b + result;
};
console.log(sum(3, 5, 3, 5));
var hobbies = ['Sports', 'Cooking'];
var activehobbies = ['Hiking'];
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push.apply(activehobbies, hobbies);
