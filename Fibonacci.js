const fibonacci = (num) => {
  // base case
  if (num === 1) return [0, 1];
  // general case
  const series = fibonacci(num - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);
  return series;
};

console.log(fibonacci(7));
