// index.js

// Basic Math Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Math + Assignment Operations
function increment(n) {
  return ++n;
}

function decrement(n) {
  return --n;
}

// Parsing Numbers
function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  increment,
  decrement,
  makeInt,
  preserveDecimal,
};
