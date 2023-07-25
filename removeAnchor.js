// const removeAnchor = (url) => {
//   const splitUrl = url.split('#');
//   return splitUrl[0];
// }

// const removeAnchor = (url) => {
//   return url.split('#')[0]
// }

const removeAnchor = (url) => url.split('#')[0]

module.exports = removeAnchor;

// All three of the above are essentially the same