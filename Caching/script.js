//Caching And Memoization

function myMemoize(func, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const square = (num1, num2) => {
  return num1 * num2;
};

const myMemoizecall = myMemoize(square);
console.time("first Call");
console.log(myMemoizecall(9245, 9786));
console.timeEnd("first Call");

console.time("Second Call");
console.log(myMemoizecall(9245, 9786));
console.timeEnd("Second Call");
