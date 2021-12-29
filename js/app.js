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

console.log(image);
//End of My Practice

