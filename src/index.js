function surface(r) {
  if (!r || isNaN(Number(r)) || r <= 0) {
    throw new Error('Radius must be a positive number');
  }
  
  return Number(r)^2 * Math.PI;
}

module.exports = {
  CircleMath: {
    surface,
  }
}
