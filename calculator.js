//adition fuction

function add(a, b) {
  return a + b;
}
//substraction fucntion
function subtract(a, b) {
  return a - b;
}
//multi func
function multiply(a, b) {
  return a * b;
}
//division also handling by zero 
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${operation
      }`);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
