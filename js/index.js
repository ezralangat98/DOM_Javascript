//Statement - piece of code that expresses action to be done, terminated with ;
//Console in browser ctrl alt i to access embedded terminal
console.log('Hello1');
let myname = 'Aron_wan_Bissaka ooh!';
console.log(myname);
let age = 90, 
    name = 'Amos';

const taxRate = 0.08989;
console.log(taxRate);
let isAproved = true; //Boolean Literal
let selectedColor = null;
//Object
let house = {
    location: 'Nairobi',
    country:"Kenya",
    latitude: 50
};
console.log(house);
console.log(house.country);
console.log(house.location);

//Accessing object property
//Using Dot Notation
house.country = 'USA';
console.log(house.country);

//Using Bracket Notation
house['location'] = 'Texas';
console.log(house.location);

//Useful when the name of the target property is unknown until the runtime
let selection = 'latitude'; //Determines the name of the property that user is selecting
house[selection] = 80; //Accessing the property in a dynamic way
console.log(house.selection);

//Arrays - Store list of objects
//Lengths and types are dynamic. Can store different types of objects
let myColors = ['purple','Violet'];
myColors[2] = 89; //Length / Type of array is dynamic
console.log(myColors);
console.log(myColors[0]);
console.log(myColors.length); //Arrays are objects with properties..protypes

//Functions - set of statements that performs a task or calculate a value
// Parameter at declaration - name, argument at calling function - Maxwell
//Performing tasks
function greeting(name, city){
    console.log('Hi ' + name + ' ' + city); //Cleaner way of doing concatenation is by using template literals
}
greeting('Maxwel', 'Nairobi');
greeting('Melvin', 'Kampala');

  
//Calculate a value
function square(no){
    return no*no;
}
let no = square(80);
console.log(no);
console.log(square(10));  //passing expression argument(which is a call to another function) to this function call 

//Console
//printing values in a table
console.table([1,2,3]);
//error
console.error('OOps!!');

// console.clear();
//Warning
console.warn('Warning');
//Get element by id
// let name1 = prompt("What is your name?");
// document.getElementById('welcome').innerHTML = 'Welcome '+ name1;

// Check how much time a code takes to execute
console.time('Test');
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.warn("A warning");
console.timeEnd('Test');



//Var - No redeclaring with let
var person = 'aron wan';
var person = 'thermos';

console.log(person);

let shopping = ['Hello','Redmond',12,'45'];
console.log(shopping);

//Datatypes Rev
let dog = 'Simba';
dog = 6767;
dog = Symbol('My Symbol'); //es6
dog = null;    //object
dog = new Date();

console.log(dog);
console.log(typeof dog);

//Quotes and strings
let location1 = 'The "best place ever" is ';
location1 += 'Colorado that\'s in Texas ';
location1 += "as he say's \"Come here!\" "
console.log(location1);
//Methods
let myMethod = location1.length;
myMethod = location1.concat(" ", "and added bonus");
myMethod = location1.toUpperCase();
myMethod = location1.toLowerCase();
myMethod = location1.indexOf('best');
//Use of indexOf 
const email = 'df@gmail.com';
let validEmail = email.indexOf('@');

if(validEmail > 0){
    console.log('Valid Email');
} else {
    console.log('Invalid Email');
}
//End of Use of indexOf 
myMethod = location1.substring(0, 20); //trim char
//substring from the end
myMethod = location1.substring(location1.length - 20);

myMethod = location1.slice(0, 20);
myMethod = location1.slice(-10);
myMethod = location1.split(' ');
myMethod = location1.replace('Colorado','Denver');
myMethod = location1.includes('Texas');
//Repeat
let name2 = 'MASSETTI!!';
myMethod = name2.repeat(4);

//Math
let calculations;
myMethod = Math.PI;
myMethod = Math.round(2.5);
myMethod = Math.ceil(2.2); //round up
myMethod = Math.floor(2.9); //force down

console.log(myMethod);

//End of Methods

//TEMPLATE LITERALS
const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

// Old Method
let html;
html  = '<ul>'+
        '<li>Item: ' + product1 + '</li>' +
        '<li>Price: $ ' + price1 + '</li>' +
        '<li>Item: ' + product2 + '</li>' +
        '<li>Price: $ ' + price2 + '</li>' +
        '<li>Total: $' + (price1 + price2) + '</li>';
        '</ul>';

// New method using Template Strings / Template Literals - they use back-ticks (``) to define a string:
html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}</li>
        <li>Total: ${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2;
}

let welcome = document.querySelector('#welcome');
welcome.innerHTML = html;

// END OF TEMPLATE LITERALS

//Arrays
// Array of Months
const months = new Array('January', 'February', 'March', 'April', 'May', 'June');
console.log(months);

// Change Values in the array
months[3] = 'December';
console.log(months);

// Find any element in the array
console.log(months.indexOf('December'));

// Add any element in the end of the array
months.push('Noviembre');
console.log(months);

// Add element at the beginning of the array
months.unshift('Mes 0');

// Remove element from the end
months.pop();

// Remove element from the beggining
months.shift();



//const variables must be initialized
//Console - prints error/ check if a value exist
// The values from an object /arrays (const) can be re assigned.
// A variable cannot start with a number
//Javascript is Dynamic - variable type can change at run time.
//typeof name; - operator
//numbers are all type of numbers
//Value / primitive types: Number, String, Boolean, null, undefined
//Referenced Types - Object, Array and Function