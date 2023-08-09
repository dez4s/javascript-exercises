const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((accumulator, elem) => accumulator + elem, 0)
};

const multiply = function(array) {
  return array.reduce((accumulator, elem) =>  accumulator * elem, 1)
};

const power = function(a, b) {
  return a ** b;
};	

const factorial = function(a) {
  if (a == 0) return 1;
	let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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

