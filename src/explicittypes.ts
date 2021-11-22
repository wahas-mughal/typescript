//explicit types

let char: string;
let age: number;
let isLoggedIn: boolean;
let fname: string;

// let fname = 'youshi';
// fname = 'maria';

// age = '40';
// age = 40 - work

// isLoggedIn = 1
// isLoggedIn = false; - work

//arrays

let users: string[] = []; // initialize string array with an empty array
users.push("mario");

let ages: number[] = []; // initialize number array with an empty array
ages.push(40);

//mixed type

let mixedTypeArray: (string | number | boolean)[] = [];
mixedTypeArray.push("maria");
mixedTypeArray.push(40);
mixedTypeArray.push(true);

console.log(mixedTypeArray);

//with normal variables
let uid: string | number;
uid = 30;

//objects

let object: object;
object = []; // this will work if no object structure is present

let object2: {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

object2 = {
  name: "youshi",
  age: 40,
  isLoggedIn: false,
};

// object2 = [] - this will not work, object structure should match
