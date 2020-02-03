const stringReverse = (str) => {
  // base case
  if (str === '') {
    return '';
  }
  // general case
  return stringReverse(str.substr(1)) + str.charAt(0);
};

console.log(stringReverse('the kitty says meow'));
