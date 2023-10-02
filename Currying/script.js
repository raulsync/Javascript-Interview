//currying
//sum(2)(6)(1)
//it is function returning another function expecting another parameter
//it reuns only when all parameter is passed via arguement ,
//in case if we not pass all parameter then it returns the function definition

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(5)(6)(4));

//evaluate("sum")(4)(2)
//evaluate("subtract")(5)(6)
//evaluate("multiply")(6)(7)

function evaluate(instruction) {
  return function (a) {
    return function (b) {
      if (instruction === "sum") {
        return a + b;
      } else if (instruction === "subtract") {
        return a - b;
      } else if (instruction === "multiply") {
        return a * b;
      }
    };
  };
}

console.log(evaluate("sum")(5)(15));
console.log(evaluate("subtract")(40)(15));
console.log(evaluate("multiply")(5)(15));

//infintite currying
//implement sum(1)(2)(3)....(n)

function addition(a) {
  return function (b) {
    if (b) return addition(a + b);
    return a;
  };
}

console.log(addition(5)(6)(7)(8)(8)());

//currying vs partial application

//it means the currying return a function expecting next arguent but incase of partial application it return the function after fixing some arguement

function multiply(a) {
  return function (b, c) {
    return a * b * c;
  };
}

console.log(multiply(4)(5, 6));

const mult = multiply(5);

console.log(mult(4, 5));
console.log(mult(4, 10));

//Manipulating dom through currying

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHead = updateElementText("head");
updateHead("Hello Rahul Anand");

//currying implementation
//convert func(a,b,c)->func(a)(b)(c)

function curry(func) {
  return function (...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...moreargs) {
        return curried(...args, ...moreargs);
      };
    }
  };
}

function multiPlication(a, b, c) {
  return a * b * c;
}

const curried = curry(multiPlication);

console.log(curried(3)(4)(8));
