const middleElement = (triplet) => {
  const tripletCopy = [...triplet];
  const middleNumber = () => tripletCopy.sort((a, b) => a - b)[1];
  return triplet.findIndex((element) => element === middleNumber());
}

module.exports = middleElement;
