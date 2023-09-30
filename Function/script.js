//function declaration :- function declaration is nothing but a normal function

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 6));

//function expression:- when we store function into a variable and use it as a value

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(5, 10));

//anonymous function :- a function which has no name
//like this
// function(){

// }

//first class:- when a function assign to a variable and it is use as value and when function pass as arguement and return as function

function square(num) {
  return num * num;
}

function displaySquare(func) {
  console.log(func(5));
}

displaySquare(square);

/*
Write a function that would allow you to do this
const addSix = createBase(6);
addSix(10) return 16
addsix(5) return 21
*/

function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

const addSix = createBase(6);
addSix(10);
addSix(11);

let count = 0;

(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); //it givs one because global variable is shadowed by local variable
  }
  console.log(count); //it gives zero as output because let is block scoped
})();

//Time optimization by closure

function findIndex() {
  let a = [];

  for (let i = 0; i < 10000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = findIndex();
console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");

//Block Scope and SetTimeOut

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

//by let we can change it to behave like normal or by closure

for (let i = 5; i < 9; i++) {
  //
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

//Modify private counter through closure

function createCounter() {
  let _count = 0;

  function add(increment) {
    _count += increment;
  }

  function getCounter() {
    return "counter = " + _count;
  }

  return {
    add,
    getCounter,
  };
}

const c = createCounter();

c.add(5);
c.add(10);

console.log(c.getCounter());

//Module Pattern
//it is a technique to achieve encapsulation, data hiding through function scopes
//we use function scope to create public and private then we return an object to use it

function ModulePattern() {
  function public() {
    console.log("I am public");
  }

  function private() {
    console.log("private");
  }

  function anotherPublic() {
    console.log("2nd public");
  }

  return {
    public,
    private,
  };
}

const module = ModulePattern();

module.private();
module.public();

//make this only calls once

let view;

function likeTheVideo() {
  let count = 0;

  return function () {
    if (count > 0) {
      console.log("Already Printed");
    } else {
      view = "Rahul Anand";
      console.log(view);
      count++;
    }
  };
}

let isViewedOnce = likeTheVideo();

isViewedOnce();
isViewedOnce();
isViewedOnce();
isViewedOnce();
isViewedOnce();

//polyfills for once

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const sayHello = once((a, b) => {
  console.log("Hello", a, b);
});

sayHello(1, 2);
sayHello(1, 2);
sayHello(1, 2);
sayHello(1, 2);

//polyfills for memoize

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args); // it creates a unique key based on arguement
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...args);
      cache[key] = result;
      return result;
    }
  };
}

function square(num1, num2) {
  for (let i = 0; i < 10000000; i++) {
    return num1 * num2;
  }
}

console.time("first Call");
console.log(square(9451, 9345));
console.timeEnd("first Call");

console.time("second Call");
console.log(square(9451, 9345));
console.timeEnd("second Call");

//By Memoize

const memoizeCall = memoize(square);
console.time("MemoizeCall");
console.log(memoizeCall(9451, 9345));
console.timeEnd("MemoizeCall");

console.time("Scnd");
console.log(memoizeCall(9451, 9345));
console.timeEnd("Scnd");
