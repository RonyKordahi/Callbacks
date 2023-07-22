// // **************** //
// // Hoitsed function //
// // **************** //

// Notes: Hoisting is not good, and should be avoided whenever possible!

// console.log(sayHello());

// function sayHello() {
//     return "Hello Rony!";
// }


// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ********************** //
// // Re-defining a function //
// // ********************** //

// Notes: Redefining functions is not good either, and can really cause a lot of trouble in your code!

// function sayHello(name1, name2) {
//     return `Hello ${name1} and ${name2}!`;
// }

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(sayHello("Gary", "Quinn"));

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ************************** //
// // Function stored as a value //
// // ************************** //
// const sayHello = function() {
//     console.log("Hello!");
// }

// sayHello();

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ************************* //
// // Function with 1 parameter //
// // ************************* //
// const sayHello = function(name) {
//     return `Hello ${name}!`;
// }

// console.log(sayHello("Rony"));
// console.log(sayHello("Gary"));
// console.log(sayHello("Quinn"));

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ************************** //
// // Function with 2 parameters //
// // ************************** //
// const sayHello = function(name1, name2) {
//     return `Hello ${name1} and ${name2}!`;
// }

// console.log(sayHello("Rony"));
// console.log(sayHello("Gary", "Quinn"));

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ******************************* //
// // Function with default parameter //
// // ******************************* //
// const sayHello = function(name1, name2 = "Mooncake") {
//     return `Hello ${name1} and ${name2}!`;
// }

// console.log(sayHello("Rony"));
// console.log(sayHello("Gary", "Quinn"));