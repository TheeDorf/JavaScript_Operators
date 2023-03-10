console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log( "add:==========");
console.log("minus: =======")
console.log("multiply" )
console.log("dividing")

// YOUR CODE HERE
var a = 20;
var b = 4;
var add = a + b;
var minus = a-b;
var multiply = a*b;
var dividing = a/b; 
console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);


// Exercise 2
console.log("EXERCISE 2:\n_________\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num+str);
// 1111
console.log(num+str2) ;
// 11eleven
console.log(num+isPresent);
// 11
console.log(firstName+num);
// Frodo11
console.log(isPresent+str);
// 11
console.log(firstName+lastName);
// Frodo Baggins




// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3);
// true
console.log(val===str3);
// false
console.log(!isAwake);
// true
console.log("eleven"|| isAwake);
// eleven
console.log(0 == false);
// true
console.log(0===false);
// false
console.log(0!=false);
// false
console.log(0!==false);
// true
