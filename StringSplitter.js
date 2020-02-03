const splitArray = [];
let stringParts = '';

const stringSplitter = (str) => {
  // base case
  if (str === '') {
    splitArray.push(stringParts);
    stringParts = '';
    return splitArray;
  }
  // general case
  if (str.charAt(0) === '/') {
    splitArray.push(stringParts);
    stringParts = '';
    return (
      stringSplitter(str.substr(1))
    );
  }
  stringParts = stringParts.concat(str.charAt(0));
  return stringSplitter(str.substr(1));
};

console.log(stringSplitter('02/20/2020'));
