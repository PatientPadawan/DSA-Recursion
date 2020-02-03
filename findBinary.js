const findBinary = (num) => num === 0 ? 0 : num % 2 + 10 * findBinary(Math.floor(num / 2));

console.log(findBinary(25));
