function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const argsToString = JSON.stringify(args);
    if (cache.has(argsToString)) {
      return cache.get(argsToString);
    } else {
      const result = fn(...args);
      cache.set(argsToString, result);
      return result;
    }
  };
}

function timeTaken(callback) {
  const start = Date.now();
  console.log(callback.toString().split(" ")[2], callback());
  const end = Date.now();
  return `Time taken: ${end - start}ms`;
}

const factorial = memoize((n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
});

console.log(timeTaken(() => factorial(100)));
console.log(timeTaken(() => factorial(100)));
