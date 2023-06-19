function points(games) {
  // return games.reduce((total, current) => total + (current.slice(0, 1) > current.slice(-1) ? 3 : current.slice(0, 1) === current.slice(-1) ? 1 : 0), 0)
  return games.reduce((total, current) => total + (current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0), 0)
}

module.exports = points;