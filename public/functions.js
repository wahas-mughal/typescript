"use strict";
//allowed
// let greet = () => {
//     console.log('function');
// }
var greet; //explicitly defining the func
greet = function () {
    console.log("function");
};
// not allowed
// greet = 'string'
//func with union optional argument: returning void type
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(4, 5);
//func with default arg value: returning void type
var add2 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add2(4, 5, 5);
// return number type
function minus(a, b) {
    return a + b;
}
var output = minus(2, 4);
