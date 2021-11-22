let array1 = ["Maria", "Steven"];

// array.push(34);
array1.push("Andrew");

let array2 = [45, 56, 30];

// array2.push('Maria');
array2.push(40);

let array3 = [45, 56, 30, true, "Mario"];

// array2.push('Maria');
array3.push(40);
array3.push(false);
array3.push("Andrew");

//objects

let person = {
  name: "Maria",
  age: 40,
  isVerified: true,
};

// wrong: object keys datatype can't be changed just like variables
// person.age = 'Andrew'
// person.name = 40;
// person.isVerified = "Andrew";

person.age = 40;
person.name = "Maria";
person.isVerified = false;
