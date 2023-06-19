function remove (string) {
  // const secondArg = string.slice(-1) === '!' ? -1 : undefined
  // return string.slice(0, secondArg);
  return string.slice(0, string.slice(-1) === '!' ? -1 : undefined);
}

module.exports = remove;