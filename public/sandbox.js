"use strict";
var character = "mario";
console.log(character);
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
//types
var loggedName = "John";
var loggedNumber = 23;
var isLogged = true;
// loggedName = 23
loggedName = "Steven";
// loggedNumber = 'Steven'
loggedNumber = 25;
// isLogged = 45
isLogged = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
