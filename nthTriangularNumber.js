const tri = (n) => {
  // base case
  if (n <= 1) {
    return n;
  }
  // general case
  return n + tri(n - 1);
};

console.log(tri(6));
