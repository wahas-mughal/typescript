//allowed
// let greet = () => {
//     console.log('function');
// }

let greet: Function; //explicitly defining the func

greet = () => {
  console.log("function");
};

// not allowed
// greet = 'string'

//func with union optional argument: returning void type
const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};

add(4, 5);

//func with default arg value: returning void type
const add2 = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add2(4, 5, 5);

// return number type
function minus(a: number, b: number): number {
  return a + b;
}

let output = minus(2, 4);
