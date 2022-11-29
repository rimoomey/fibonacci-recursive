function fibonacci(n) {
  if (n===0) {
    return 0;
  } else if (n===1) {
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * The n^th fibonacci number is mathematically defined to be equal to the sum of the (n-2)^th and (n-1)^th fibonacci numbers.
 * As such, our recursive function simply needs to recursively add the fibonacci numbers together until arriving, at the end of each stack,
 * at the 0th or 1st fibonacci numbers, which are defined to be 0 and 1, respectively.
 * 
 * pseudocode
 * 
 * function fibonacci(n) {
 * if n is 1, return 0
 * else if n is 2, return 1
 * else return fibonacci(n - 2) + fibonacci(n - 1)
 * }
 */
