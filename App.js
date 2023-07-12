// alert("Hello");  
// let str1 = " hanzala " , str2 = " Zahid ";
// let str3 = str1.concat(str2);
// document.write(str3);

// let substr = str3.substr(5,3);

// document.write(substr);

// let position = str3.indexOf('Zahid');
// document.write(position);

// Functions"
// substr , substring, indexof , LastIndexof , trim , trimStart/END , toUpperCase, toLowerCase
// replace , include

// let position = str3.lastIndexOf('h');
// document.write(position);

// let position = str3.trim();
// document.write(position);


// let position = str3.replace('Zahid' , "King");
// document.write(position);

// let position = str3.includes('Zahid');
// document.write(position);

//  push , unshift , pop , shift , splice , isArray , split,  join, concat

// let book1 = "Calculus" , book2 = "ICS" , book3 = "Physics", book4 = "Urdu";

// let book = [];
// book.push(book2,book1,book3,book4)
// // // document.write(book);
// book[2] = "English";
// // document.write(book);
// let Book = book.join(':');
// // document.write(Book);

// book.reverse();
// // document.write(book);

// book.unshift("DSA");
// // document.write(book);
// // document.write(book.splice(1, 3));
// // document.write(book);
// document.write(book.length);
// // document.write(Array.isArray(book));

// let word = "this is a text";
// let wordArray = word.split("s");
// document.write(wordArray);

// for(let i = 0; book.length > i; i++){
//     document.write(`${i}.`);
//     document.write(`Index ${i} ${book[i]}`);
// }


// book.forEach(myfu);

// function myfu(i){
//     document.write(i);
// };

// for(i = 0; i<=10; i++){
//     document.write(`2 x ${i} = ${2*i}`)
//     document.write("<br>");
//     document.write(`2 x ${i} = ${2*i}`);
// }

// DECLARING A FUNCTION:

// function myFun(a){
//     for(i = 0; i<=10; i++){
//         document.write(`${a} x ${i} = ${a*i}`);
//         document.write("<br>");
// }};

// myFun(7);

// // THE ARGUMENT OBJECT
// function addNum(){
//     let sum = 0;
//     if (arguments.lengths == 0){
//         document.write("No parameters");
//     }
//     else{
//         for(i = 0; i < arguments.lengths; i++){
//             sum = sum + arguments[i];
//         }
//         document.write(sum);
//     }
// };

// addNum(9,1);
// let c
// let addNum = (a,b) => document.write(c = a + b);
// addNum(1,5)
// setTimeout(addNum, 2000);


// document.write(c)

// you cannot use more than 1 return in a statment

// imediately Invoke Function
// (function(){
//     document.write("Hello, World!");
// })();

// Object has properties and Action or Method

// object properties

// const person1 = {
//     firstName : 'Ali',
//     lastName : 'Sheikh',    
//     age : '18',
//     fullName : function() {
//         return this.firstName+ " " + this.lastName;
//     },
// };
// const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
// Return "John Doe":
//   CALL()

// document.write(person1.fullName.call(person2));
//document.write(person1['lastname']);
// person1.firstname = "Hanzala";
// document.write(person1.fullName);

// bind()
// let fullName = person.fullName.bind(person2);
// document.getElementById("demo").innerHTML = fullName();

// Event Handler
{/* <button onclick="document.getElementById('de\
mo').innerHTML =Date()">The time is?</button> */}

// Event 	    Description
// onchange 	An HTML element has been changed
// onclick  	The user clicks an HTML element
// onmouseover 	The user moves the mouse over an HTML element
// onmouseout 	The user moves the mouse away from an HTML element
// onkeydown 	The user pushes a keyboard key
// onload 	    The browser has finished loading the page
// cc="hahahaha"
// function maskify(cc) {
//     ccnn=""
//     ccn = cc.length - 4
//     for(i=0;i<=ccn;i++){
//         document.write("#")
//     }
//     ccnn = cc.slice(-4)
//     document.write(ccnn)
//     ccn = ccn*'#'
//     document.write(ccnn)
//   }
// maskify(cc)

// Palindrome Function 
function checkPalindrome(str) {  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
        // validate the first and last characters are the same  
        if (str[i] !== str[len - 1 - i]) {  
          alert( 'It is not palindrome'); 
          return;
        }  
    }  
  // If they are not the same, then it is not a palindrome
    alert( 'It is a palindrome');  
}  
  
// take input of the string or number from the prompt  
const string = prompt('Enter a string or number to check for Palindrome: ');  
  
const value = checkPalindrome(string);  

// log it's value in the console
console.log(value);

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

// how to use the call, bind, and apply methods:
const person = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  }
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe'
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Smith'
};

// Using the "call" method
console.log(person.fullName.call(person1, 'New York', 'USA')); // Output: John Doe, New York, USA

// Using the "bind" method
const fullNameFunc = person.fullName.bind(person2);
console.log(fullNameFunc('London', 'UK')); // Output: Jane Smith, London, UK

// Using the "apply" method
console.log(person.fullName.apply(person2, ['Paris', 'France'])); // Output: Jane Smith, Paris, France

// In the example above, we define an object person with a method fullName that returns the full name along with the city and country. We then create two separate objects person1 and person2 with different firstName and lastName properties.
// Using the call method, we can invoke the fullName function on person1 object and specify the additional arguments city and country.
// Using the bind method, we create a new function fullNameFunc that is bound to the person2 object. Later, we invoke fullNameFunc passing the additional arguments city and country.
// Using the apply method, we invoke the fullName function on the person2 object and pass the arguments as an array.
// The outputs demonstrate how each method can be used to call a function with a specific context and arguments.






















