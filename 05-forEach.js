// ******************** //
// Initial declarations //
// ******************** //
const array = [1, 2, 3, 4, 5];

// ****** //
// Notes: //
// ****** //

// 1. Remember, .forEach() CANNOT return anything, ever. No matter what. Ever!

// 2. .forEach() is good for modifying things outside the array that depend on what is inside the array.

// 3. Named callback functions automatically receive the parameters that the higher-order function can pass on.
    // 3.1 For more info on .forEach(), read up on it here: https://www.w3schools.com/jsref/jsref_foreach.asp

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// ********************************************** //
// .forEach() with an anonymous callback function //
// ********************************************** //

// array.forEach((number, index) => {
//     console.log(`The number ${number} is at index ${index}`);
// })

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// ***************************************** //
// .forEach() with a named callback function //
// ***************************************** //
// const logNumber = function (number, index) {
//     console.log(`The number ${number} is at index ${index}`);
// }

// array.forEach(logNumber);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// *************************************************** //
// Dissected .forEach() with a named callback function //
// *************************************************** //

// const logNumber = function (number, index) {
//     console.log(`The number ${number} is at index ${index}`);
// }

// const ourForEach = (callback) => {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i);
//     }
// }

// ourForEach(logNumber);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// *********************************************************************** //
// Dissected .forEach() with an anonymous callback one line arrow function //
// *********************************************************************** //

// const ourForEach = (callback) => {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i);
//     }
// }

// ourForEach((number, index) => console.log(`The number ${number} is at index ${index}`));