// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to find the maximum of two numbers
  function max(a, b) {
    return a > b ? a : b;
  }
  
  // Helper function to find the minimum of two numbers
  function min(a, b) {
    return a < b ? a : b;
  }
  
  // Example usage
  console.log(square(5)); // Output: 25
  console.log(isEven(6)); // Output: true
  console.log(isOdd(7)); // Output: true
  console.log(max(10, 20)); // Output: 20
  console.log(min(10, 20)); // Output: 10