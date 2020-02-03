const allAnagrams = (string) => {
  const uniqueOutput = {};

  (function anagram(ana, str) {
    if (str === '') {
      uniqueOutput[ana] = 1;
    }
    // recursive call for the length of the anagram.
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  }('', string));
  return Object.keys(uniqueOutput);
};

const anagrams = allAnagrams('east');
console.log(anagrams);
