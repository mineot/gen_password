class GenPasswordError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "GenPasswordError";
    this.code = code;
  }
}

const ERROR = {
  INVALID: {
    TYPE: () => new GenPasswordError("Invalid Type", 400),
    DIMENSION: () => new GenPasswordError("Invalid Dimension", 400),
  },
  NOT_FOUND: {
    TYPE: () => new GenPasswordError("Type Not Found", 404),
    DIMENSION: () => new GenPasswordError("Dimension Not Found", 404),
  },
};

export { GenPasswordError, ERROR };
