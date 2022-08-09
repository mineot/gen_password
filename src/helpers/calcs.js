function Calculate({ min, max }) {
  return parseInt(Math.random() * (max - min) + min).toFixed(0);
}

export { Calculate };
