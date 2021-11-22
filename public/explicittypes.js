"use strict";
//explicit types
var char;
var age;
var isLoggedIn;
var fname;
// let fname = 'youshi';
// fname = 'maria';
// age = '40';
// age = 40 - work
// isLoggedIn = 1
// isLoggedIn = false; - work
//arrays
var users = []; // initialize string array with an empty array
users.push("mario");
var ages = []; // initialize number array with an empty array
ages.push(40);
//mixed type
var mixedTypeArray = [];
mixedTypeArray.push("maria");
mixedTypeArray.push(40);
mixedTypeArray.push(true);
console.log(mixedTypeArray);
//with normal variables
var uid;
uid = 30;
//objects
var object;
object = []; // this will work if no object structure is present
var object2;
object2 = {
    name: "youshi",
    age: 40,
    isLoggedIn: false,
};
// object2 = [] - this will not work, object structure should match
