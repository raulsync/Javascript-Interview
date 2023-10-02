//An object is a collection of properties and properties is associated with key and value
const user = {
  name: "Rahul Anand",
  age: 26,
  "i like pizza": true,
};

user.name = "Ankit";
delete user.age;
console.log(user["i like pizza"]);

const func = (function (a) {
  delete a; //delete keyword is only used to delete property of object not local variable
  return a; //so in this case it will return 5 bcz a is local variable
})(5);

console.log(func);

//add key value pair dynamically

const property = "First Name";
const value = "Nupur";

const obj = {
  // property: value, //here we use square bracket to access property properly bcs if we use property directly then it print actual property name not the name assign to that property
  [property]: value,
  age: 23,
  marks: 60,
};

console.log(obj["First Name"]);

for (key in obj) {
  console.log(obj[key]);
}

const test = {
  a: "one", //this will not print in console bcz it is shadowed by the value of same property name and that value is assigned to it
  b: "two",
  a: "three",
};

console.log(test);

//create a function multiplyByTwo(obj) that multiplies all numeric value of property by 2

const nums = {
  a: 100,
  b: 200,
  title: "My Nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(nums);

const a = {};

const b = {
  key: "b",
};
const c = {
  key: "c",
};

a[b] = 145; //it get overlapped because it takes key as object object for both
a[c] = 455;

console.log(a[b]); //so it give 455

//What is Json.strigify and Json.parse

const obj1 = {
  name: "Rahul Anand",
  age: 23,
};

const strObj = JSON.stringify(obj1); //it convert object in string format
//and it it used to setitem in localstorage where value stored in string format not in the form of object

console.log(strObj);

//and if we want to convert it from string to object then we use JSON.parse

const str = JSON.parse(strObj);
localStorage.setItem("test1", strObj);
console.log(JSON.parse(localStorage.getItem("test1")));
console.log(str);

console.log(..."Rahul"); //it converts string into array of characters //spread the element

const obj2 = { name: "rahul", age: 23 };

const admin = { admin: true, ...obj2 }; //here we use rest operator to collecting rest element from an obj
console.log(admin);

const setting = {
  username: "rahul",
  level: 90,
  health: 100,
};

const data = JSON.stringify(setting, ["level", "health"]);
console.log(data);

const shape = {
  radius: 20,
  diameter: function () {
    return this.radius * 2;
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter());
console.log(shape.perimeter()); //it print Nan because in arrow function this refers to global object //

//Destructuring of object

const user1 = {
  name: "Shiv Kumar",
  age: 25,
  user2: {
    firstName: "rAHUL",
  },
};

const { name: Myname } = user1;
console.log(Myname);

const {
  user2: { firstName: myname },
} = user1;
console.log(myname);

//usecases of rest and spread operator

function getItem(fruitLiss, favouriteFruit, ...args) {
  return [...fruitLiss, favouriteFruit, ...args];
}

console.log(getItem(["banana", "apple"], "guava", "mango"));

//object referencing

let greet = { greeting: "hello" };
let d;
d = greet; //in this case object pass by reference so anything changes in one or other object  it will reflect in both of the object
greet.greeting = "Hy rAHUL"; //if we change in the original object then it also reflect in the object that assign to it

console.log(d);

console.log({ a: 1 } === { a: 1 });
console.log({ a: 1 } == { a: 1 }); //both returns false because object is pass by reference not by value so both have assign different memory location

let person = { name: "rahul" };
const members = [person]; //here we assign person to member[0]th index
person.name = null;

console.log(members);

const value1 = { number: 10 };

const multi = (x = { ...value1 }) => {
  console.log((x.number *= 2));
};

multi();
multi();
multi(value1);
multi(value1);

//reference
function changeRef(person) {
  person.age = 25;
  person = {
    name: "rahul",
    age: 24,
  };
  return person;
}

const personObj1 = {
  name: "Divya",
  age: 40,
};

const personObj2 = changeRef(personObj1);
console.log(personObj1);
console.log(personObj2);
