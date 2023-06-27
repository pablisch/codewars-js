var capitals = function (word) {
  array = [];
  word.split('').forEach((item, index) => {
    if (/[A-Z]/.test(item)) {
      array.push(index);
    }
  });
  return array;
};

module.exports = capitals;
