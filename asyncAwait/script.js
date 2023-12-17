/*
 * Async
 * Await
 * How async await works behind the scene
 * Examples of using async await
 * Error Handling
 * Async await vs promises
 */

//async func always returns a promise if we return any value from it then it wraps that value inside promise

// when we modify the timer
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 10000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 30000);
// });

//await is used inside Async function

// async function getData() {
//   console.log("Hello");
//   //here Js engine wait for promise to resolved.
//   const result = await promise1;
//   console.log(result);

//   console.log("world!!");
//   const result2 = await promise2;
//   console.log(result2);

//   console.log("Namaste");
// }

// getData();

// dataPromise.then((res) => console.log(res));

// console.log(dataPromise);

//Now We use async await to handle fetch promises

const API_URL = "https://api.github.com/users/Rahul00154";

//we use await keyword inside async function basically await keyword is used to handle promises

const handlPromises = async () => {
  //fetch always return promises
  //we use trycatch block to handle error in async function
  //In promises we use .then .catch and it makes code look bad
  //async await is syntactical sugar upon promises, it is also used to handle promises but it makes code more readable and we have not use callback to handle response.

  try {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

handlPromises();
