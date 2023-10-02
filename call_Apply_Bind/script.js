//call Apply AnD bound

//call :- it is like we create one function and then we use it to call for as many object .

const obj = {
  username: "Rahul Anand",
};

function sayHello(age, job) {
  return `Hello ${this.username} and age is ${age} and his job is ${job}`;
}

console.log(sayHello.call(obj, 24));

//what is apply :- apply works same as call but it takes arguements in form of an array

console.log(sayHello.apply(obj, [24, "software Engineer"]));

//what is Bind :- bind method create a copy of function and we can call either later with this value

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "System Engineer"));
console.log(bindFunc(26, "It"));

const animals = [
  { species: "lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`${i} ${this.species} ${this.name}`);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//append an array by apply method

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3, 4];
arr1.push.apply(arr1, arr2);
console.log(arr1);

//find min/max elements in an array using apply method

const arr = [1, 5, 7, 9, 3, 11];

console.log(Math.max.apply(null, arr)); //here we provide null bcs there is no any context
