const calculateAverage = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, total) => sum + total, 0) / arr.length;
};

module.exports = calculateAverage;