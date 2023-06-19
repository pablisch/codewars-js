const summation = (num) => {
  // const arr = Array.from(Array(num).keys(), x => x + 1);
  // return arr.reduce((total, current) => total + current, 0)
  // return Array.from(Array(num).keys(), x => x + 1).reduce((total, current) => total + current, 0)
  return [...Array(num).keys()].map( x => x + 1).reduce((total, current) => total + current, 0)
}

module.exports = summation;