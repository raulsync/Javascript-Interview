/*
 * * Write a function that generates a closure to handle click events. The closure should count the number of times the button is clicked and display the count.
 */

const button = document.querySelector('.btn');

const handleClick = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

const clickCounter = handleClick();

button.addEventListener('click', clickCounter);

/*
 * * Create a function that returns two closures. One closure should add a given amount to a counter, and the other closure should subtract a given amount from the same counter.
 */

const Counter = () => {
  let count = 0;
  return {
    Addcount: () => {
      count++;
      return count;
    },
    subtractCount: () => {
      count--;
      return count;
    },
  };
};

const counterClosure = Counter();

console.log(counterClosure.Addcount());
console.log(counterClosure.Addcount());
console.log(counterClosure.subtractCount());
console.log(counterClosure.Addcount());
console.log(counterClosure.subtractCount());
console.log(counterClosure.Addcount());
console.log(counterClosure.Addcount());
console.log(counterClosure.subtractCount());

/*
 * * Implement a memoization function using closures. The function should cache the results of expensive calculations and return the cached result if the same calculation is requested again.
 */
