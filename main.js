const calculator = require('./calculator');
const mathUtils = require('./mathUtils');

function demonstrateCalculator() {
  console.log(`Addition of  5 + 7 = ${calculator.add(5, 7)}`);
  console.log(`Multiplication of  3 * 4 = ${calculator.multiply(3, 4)}`);
  console.log(`subtraction of 10 - 3 = ${calculator.calculate('subtract', 10, 3)}`);
  try {
    console.log(`Divide 10 / 0 = ${calculator.divide(10, 0)}`);
  } catch (error) {
    console.error('Handled division error:', error.message);
  }
  console.log(`division(20, 4) = ${calculator.calculate('divide', 20, 4)}`);
}

function demonstrateMathUtils() {
  const numbers = [2, 3, 5];
  numbers.forEach((num) => {
    console.log(`${num} is even? ${mathUtils.isEven(num)}`);
    console.log(`${num} is odd? ${mathUtils.isOdd(num)}`);
    console.log(`Square of ${num}: ${mathUtils.square(num)}`);
    console.log(`cube of ${num}: ${mathUtils.cube(num)}`);
  });

}

function main() {
  demonstrateCalculator();
  demonstrateMathUtils();
}

if (require.main === module) {
  main();
}
