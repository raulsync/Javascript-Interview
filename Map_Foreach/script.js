const arrElement = [2, 5, 6, 7, 9];

const mapElement = arrElement.map((elem) => {
  return elem * 2;
});

/*
  foreach method does not return a new array 
  but map method return whole a new array after performing some operation
*/

const foreachElement = arrElement.forEach((elm) => {
  return elm * 4;
}); //it gives undefined because it does not return anything

console.log(mapElement, foreachElement);

/* 
Given an array of numbers numbers, use the map() function to double each number in the array and store the results in a new array doubledNumbers.
*/

const numbers = [1, 4, 5, 6, 7, 8];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers);

//arr.map((num,index,array)=>{})

//Polyfills for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 4, 5, 6];

const tripleNum = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(tripleNum);

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

const myFilter = nums.myFilter((num) => {
  return num > 2;
});

console.log(myFilter);

//Polyfills for reduce

//array.reduce((accumulator,index,array)=>{},initialvalue)

Array.prototype.myReduce = function (calback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? calback(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const myReduce = nums.myReduce((accumulator, curr) => {
  return accumulator + curr;
}, 0);

console.log(myReduce);

let students = [
  { name: "Rahul anand", Roll_no: 21, marks: 45 },
  { name: "Prashant rAO", Roll_no: 31, marks: 65 },
  { name: "Bikram kUMAR", Roll_no: 16, marks: 35 },
  { name: "Abhishek Singh", Roll_no: "19", marks: 35 },
];

//convert name in upperCase

for (let i = 0; i < students.length; i++) {
  const result = students[i].name.toUpperCase();
  console.log(result);
}

const toupperRes = students.map((stu) => {
  return stu.name.toUpperCase();
});

console.log(toupperRes);

//return those who have scored more than 60

const topperMarks = students.filter((stu) => {
  return stu.marks > 60;
});

console.log(topperMarks);

//return those who scored more than 60 and roll num is greater than 15

const topper = students.filter((stu) => stu.marks > 60 && stu.Roll_no > 15);

console.log(topper);

//sum of all marks

const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum);

//return only names of students those who scored more than 60

const nameOfStudents = students
  .filter((stu) => {
    return stu.marks > 60;
  })
  .map((stu) => {
    return stu.name;
  });

console.log(nameOfStudents);

//return total marks for stuents with marks greater than 60 after add 20 marks extra to those who scored less than 60

const moreThan60 = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(moreThan60);
