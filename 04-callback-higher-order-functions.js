// // ***************************** //
// // Named callback arrow function //
// // ***************************** //
// const logMessage = (message) => {
//     console.log(message);
// }

// const higherOrder = (callback) => {
//     console.log(callback);
//     // callback();
//     callback("Hello, I am a named callback function!");
// }

// higherOrder(logMessage);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ********************************** //
// // Named callback function expression //
// // ********************************** //
// const logMessage = function(message) {
//     console.log(message);
// }

// const higherOrder = (callback) => {
//     console.log(callback);
//     // callback();
//     callback("Hello, I am a named callback function!");
// }

// higherOrder(logMessage);

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ********************************* //
// // Anonymous arrow callback function //
// // ********************************* //

// const higherOrder = (callback) => {
//     console.log(callback);
//     callback();
// }

// higherOrder(() => {
//     console.log("Hello, I am an anonymous arrow callback function!");
// })

// *********************************************************************************************************** //
//                                              Next Demo                                                      //
// *********************************************************************************************************** //

// // ************************************** //
// // Anonymous callback function expression //
// // ************************************** //

// const higherOrder = (callback) => {
//     console.log(callback);
//     callback("Hello, I am a named callback function!");
// }

// higherOrder(function() {
//     console.log("Hello, I am an anonymous callback function expression!");
// })