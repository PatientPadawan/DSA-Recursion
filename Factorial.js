const factorial = (num) => {
  // base case
  if (num === 0) return 1;
  // general case
  return (num * factorial(num - 1));
};

console.log(factorial(5));
