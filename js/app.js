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


//Arrow functions allow us to write shorter function syntax:

hello = function() {
	return "Hello World!";
  }

//With Arrow Function:

hello = () => "Hello World!";


//End of My Practice

