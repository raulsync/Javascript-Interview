// function hoisting() {
//   console.log(a);

//   var a = 5;
// }

// hoisting();

//Implicit and explicit function call

// const obj = {
//   userName: "rahul",
/*
  if we use here arrow function instead of named function then it will point to window object and it has not pointing to object so it is not going to print anything
  */
//   getName: function () {
//     console.log(this.userName);
//   },
// };

// obj.getName();

// const obj1 = {
//   userName: "Anand",
// };

// obj.getName.call(obj1);

console.log("a");

setTimeout(() => {
  console.log("b");
}, 0);
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("c");

//infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(4)(3)(4)(2)(6)());

const calc = {
  totalCalc: 0,
  add: function (a) {
    this.totalCalc += a;
    return this;
  },
  multiply: function (b) {
    this.totalCalc *= b;
    return this;
  },
  subtract: function (c) {
    this.totalCalc -= c;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(40);

console.log(result.totalCalc);

//convert time 12h to 24hr

/*
   Define a JavaScript constructor function Person that takes a name and age as arguments and adds a method greet() to its prototype that logs a greeting with the person's name and age.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`hello ${this.name} `);
};

const func = new Person("rahul", 26);

func.greet();

console.log(func);

/* 
Create an object car with properties make, model, and year. Use the prototype to add a method getDetails() that returns a string with the car's make, model, and year.
*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getDetails = function () {
  return `The car is brand of ${this.brand} ${this.model} and made in ${this.year}`;
};

const car = new Car("Toyta", "Fortuner", 2023);

console.log(car);

console.log(car.getDetails());

/*
Use the spread operator to merge two objects obj1 and obj2 into a new object mergedObj.
*/

const obj1 = {
  name: "Rahul",
  email: "rahul@mail.com",
};

const obj2 = {
  name: "Ankit",
  email: "ankit@mail.com",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

/* 
Given an array of numbers numbers, use the filter() function to create a new array evenNumbers that contains only the even numbers from the original array.
*/

const numbers = [2, 3, 4, 6, 8, 9, 10];

const filterElem = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(filterElem);

/*
 Use the reduce() function to calculate the sum of all numbers in an array numbers.
*/

const arrayNum = [2, 5, 7, 10, 11];

const reduceElem = arrayNum.reduce((num, currElem) => {
  num = num + currElem;
  return num;
}, 0);

console.log(reduceElem);

/* 
Use the forEach() function to log each element of an array fruits.
*/

const fruits = ["apples", "banana", "guava", "pineapple", "apple", "banana"];

const fruitsElem = fruits.forEach((fru, index) => {
  console.log(fru);
});
/*
Create an object person with properties name and age. Create a function introduce that logs a greeting with the person's name and age. Use both call() and apply() to invoke the introduce function with the context of the person object.
*/

const person = {
  name: "rahul",
  age: 26,
};

function introduce(city, state) {
  console.log(` Hy ${this.name} age is ${this.age} from ${city} ${state}`);
}

introduce.call(person, "Patna", "Bihar");
introduce.apply(person, ["Delhi", "India"]);
const person2 = introduce.bind(person, "Chandigarh", "Punjab");
person2();

//Polyfills for filter

//arr.filter((num,index,array)=>{})

Array.prototype.myFilter = function (callbackfunc) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackfunc(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const fruitsFilter = fruits.filter((fru) => {
  return fru === "banana";
});

console.log(fruitsFilter);
