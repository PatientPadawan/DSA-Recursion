const powerCalculator = (base, exp) => {
  // reject
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  // special case
  if (exp === 0) {
    return 1;
  }
  // base case
  if (exp === 1) {
    return base;
  }
  // general case
  return base * powerCalculator(base, (exp - 1));
};

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, 0));
console.log(powerCalculator(10, -2));
