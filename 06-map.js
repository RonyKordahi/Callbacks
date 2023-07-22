// ******************** //
// Initial declarations //
// ******************** //
const array = [1, 2, 3, 4, 5];

// Notes: 
// 1. Remember, .map() ALWAYS returns an array of the same length as the original.
    // 1.1 Because .map() returns something, we want to save the returned value into a variable.
    // 1.2 We could also put the map directly into a console.log(), but that can look messy 🤷.
// 2. .map() can also be used to create brand new arrays of the same length (see the last example)
// 3. Named callback functions automatically receive the parameters that the higher-order function can pass on.
    // 3.1 For more info on .map(), read up on it here: https://www.w3schools.com/jsref/jsref_map.asp

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// ****************************************** //
// .map() with an anonymous callback function //
// ****************************************** //
// const result = array.map((number) => {
//     return number * 10;
// })

// console.log("result: ", result);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// ************************************* //
// .map() with a named callback function //
// ************************************* //

// const squareNumbers = (number) => {
//     return number * number
// }

// const result = array.map(squareNumbers)

// console.log("result: ", result);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// *********************************************** //
// Dissected .map() with a named callback function //
// *********************************************** //
// const newArray = [];

// const multiplyNumbers = (number, multiplier) => {
//     if(number % 2 != 0) {
//         newArray.push(number * multiplier);
//     }
//     else {
//         newArray.push(number);
//     }
// }

// const ourOwnMap = (callback) => {
//     for(let i = 0; i < array.length; i++) {
//         callback(array[i], 10);
//     }
// }

// ourOwnMap(multiplyNumbers);

// console.log("newArray: ", newArray);