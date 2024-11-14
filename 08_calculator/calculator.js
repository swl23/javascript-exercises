const add = function(a, b) {
	result = (a + b);
  return result
};

const subtract = function(a, b) {
	result = (a - b);
  return result
};

const sum = function(array) {
	let result = 0;
  for (item of array) {
    result += item
  }
  return result
};

const multiply = function(array) {
  let initialValue = 1;
  const result = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue);
  return result
};

const power = function(a, b) {
	const result = a ** b;
  return result
};

const factorial = function(a) {
	if (a === 0) {
    let result = 1;
    return result
  }
  else if (a === 1) {
    let result = 1;
    return result
  }
  else {
    let b = a - 1;
    let array = [];
    for (i = 0; i <= b; i++) {
      array.push(i);
    }
    array.shift();
    console.log(array);
    const initialValue = 1;
    const product = array.reduce(
      (accumulator, currentValue) => accumulator * currentValue, initialValue);
    const result = (product * a);
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
