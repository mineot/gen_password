class GenPasswordError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "GenPasswordError";
    this.code = code;
  }
}

const ERRORS = {
  TYPE: {
    INVALID: () => new GenPasswordError("type.invalid", 400),
    NOT_FOUND: () => new GenPasswordError("type.not.found", 404),
  },
  DIMENSION: {
    INVALID: () => new GenPasswordError("dimension.invalid", 400),
    NOT_FOUND: () => new GenPasswordError("dimension.not.found", 404),
  },
};

export { GenPasswordError, ERRORS };
