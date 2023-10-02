//this refers to the object on which a method or function is being invoked
//it is basically refers to the context where we are calling this

this.a = 5;
console.log(this.a);
console.log(this); //in global scope this refers to window object

function exfunc() {
  console.log(this.a); //here this refers to global object i.e its parent
}

exfunc();

//this in arrow function always point to global object

const func = () => {
  console.log(this);
};

func();

//this inside object refers to the object which this are calling

const user = {
  name: "Rahul",
  age: 23,
  childobj: {
    newName: "ANKIT",
    age: 23,
    getDetail: function () {
      console.log(this.newName, this.name); //here scnd one give undefined because in normal function this points to immediate parent object
      const nestedFunc = () => console.log(this.newName); //here this inherit the value from normal so here this behave like normal function
      nestedFunc();
    },
  },
};

user.childobj.getDetail();

//this keyword in class

class person {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const person1 = new person("rahul"); //it creates new object with constructor function
console.log(person1);
person1.getName();

//outPut Based Question

const user1 = {
  firstName: "Rahul Anand",
  getUserDetail() {
    const firstNmae = "Abhishek Singh";
    console.log(this.firstName); //this inside object always point to object itself
  },
};

user1.getUserDetail();

function makeUser() {
  return {
    name: "rahul",
    ref() {
      return this;
    },
  };
}

const user2 = makeUser();

console.log(user2.ref().name);

const user3 = {
  name: "rahulAnand",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(user3.logMessage, 1000); //it gives empty output bcaz here we use function as callback

setTimeout(function () {
  user3.logMessage(); //here we invoke log function as normal function so it gives the correct outPut
}, 1000);
