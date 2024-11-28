let b=10;
function test() {
    var b = 30;
    console.log(b)
}
console.log(b);
test();

var a="chrome";
a="firefox";
console.log(a);

console.log("Welcome to JS")
var StudentName = "John"
console.log(StudentName)
console.log("My name is "+  StudentName)

// var - old way
// scope - functional/local + global  
 //var let const
 var a = 10;
 function test() {
     var b = 30;
     
 }
 console.log(a)
 //console.log(a)
 //console.log(b) 
 /*var g;
 console.log(g)  // undefined */
 //Issue with var
 var flag = 'Cypress'
 var t1 = 4
 if(t1>3)
 {
     var flag='Selenium'
     console.log(flag);
 }
 console.log(flag); // Selenium 
 let browser = 'chrome'
  browser ='edge' 
  browser = 'firefox'
   // Reinitialization and re decralation possible
 console.log(browser) 
 //let - Improvement of var
 // scope-block scoped
 let xyz ='Hey';
 let time=4;
 if(time>3)
 {
     let xyz='how are you';
     console.log(xyz);
 }
 //console.log(msg)  //Undefined
 console.log(xyz)   //Hey 
 //var len = 4;
 //var len = 5;
 //console.log(len) 
 //let n = 6   // let can be reinitialized but cannot be re declared
 //let n = 9
 
 //const - Once the value is declared, cannot be declared again
 const days = 9;
 //days = 10 ; 
 console.log(100*days) // Error - Assignment to constant variable */
 
 //FUNCTION
 
 /*add()
 function add(){    //declare function
     console.log(2+3)
     console.log("I am Happy")
 } */
  
 /*let addition = function(){    //declare function
     console.log(6+3)
     console.log("I am Sad")
 }
 addition(); */
 
 /*let addition = function(num1,num2){    //declare function
     console.log(num1+num2)
 }
 addition(6,9); */
 
 
 let addition = (num1,num2) => {    //declare function
     console.log(num1+num2)
 }
 addition(2,9);