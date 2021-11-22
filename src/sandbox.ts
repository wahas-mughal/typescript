const character = "mario";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

//types
let loggedName = "John";
let loggedNumber = 23;
let isLogged = true;

// loggedName = 23
loggedName = "Steven";

// loggedNumber = 'Steven'
loggedNumber = 25;

// isLogged = 45
isLogged = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7));
