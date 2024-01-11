// Flatten array
// Given a nested array return a flattend array
// ex : [[1,2,[3]],4,[5,[6]]] => [1,2,3,4,5,6]

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val);
  }, []);
};

console.log(flatten([[1, 2, [3]], 4, [5, [6]]]));
