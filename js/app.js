//All selectors start with document
let oddLinks = document.querySelectorAll("#primary a:nth-child(odd)");

oddLinks.forEach((oddlink) => {
	oddlink.style.backgroundColor = "red";
	oddlink.style.color = "white";
});

let addToCartBtns = document.querySelectorAll(".price");
addToCartBtns.forEach((btn) => {
	btn.textContent = "2000ksh";
});
console.log(addToCartBtns);
//My Practice
let heading = document.getElementById('heading');

heading.style.background = 'black';
heading.style.color = 'white';
heading.textContent = 'Scintilating Courses!';
heading.innerText = 'New Courses';

//Query Selector - select id or class - systax similar to css 
const learningHeading = document.querySelector('#learn');

const tagline = document.querySelector('.tagline');
const newText = tagline.textContent.replace('$15','$10');

tagline.textContent = newText;

//Selecting by tag
let heading2 = document.querySelector('h2');  

//Nesting selectors with css sysntax
let image = document.querySelector('.card img');

//Query selector supports nth-child, first-child and last-child
let link;
link = document.querySelector('#primary a:first-child')
link = document.querySelector('#primary a:last-child')
link = document.querySelector('#primary a:nth-child(2)')

console.log(link );

// ES6 stands for ECMAScript 6.

// ECMAScript was created to standardize JavaScript
//--Arrow functions--
//Arrow functions allow us to write shorter function syntax:

hello = function() {
	return "Hello World!";
  }

//With Arrow Function:

hello = () => "Hello World!";

//--Destructuring--
//Destructuring makes it easy to extract only what is needed from n array or object.
//Before
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//With destructuring:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
//the order that variables are declared is important.
//If we only want the car and suv we can simply leave out the truck but keep the comma:

const [car,, suv] = vehicles;

//Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
	const add = a + b;
	const subtract = a - b;
	const multiply = a * b;
	const divide = a / b;
  
	return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);


// --CONST-- does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:
// Reassign a constant value, array and object

// But you CAN:
// Change the elements of constant array
// Change the properties of constant object

//-- MODULES--
// They allow you to break up your code into separate files.
// ES Modules rely on the import and export statements.
//Export - There are two types of exports: Named and Default.

//Named Exports
//You can create named exports two ways:

//In-line individually in person.js
export const name = "Jesse"
export const age = "40"

// All at once at the bottom:
const name = "Jesse"
const age = "40"

export { name, age }

// Default Exports
// You can only have one default export in a file.
const message = () => {
	const name = "Jesse";
	const age = "40";
	return name + ' is ' + age + 'years old.';
  };
  
  export default message;

// Import
// You can import modules into a file in two ways, 
//based on if they are named exports or default exports.
  
// Named exports must be destructured using curly braces. 
//Default exports do not.

//Import named exports from the file person.js:
import { name, age } from "./person.js";
//Import a default export from the file message.js:
import message from "./message.js";

// --Ternary Operator--
// It is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>

// Here is an example using if / else:
if (authenticated) {
	renderApp();
  } else {
	renderLogin();
  }
//With Ternary
authenticated ? renderApp() : renderLogin();

// --Spread Operator--
//spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// Example
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//spread operator is often used in combination with destructuring.
//Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

// We can use the spread operator with objects too:

// Example
// Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//End of My Practice

