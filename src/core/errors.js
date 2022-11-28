// @ts-check

/**
 * Generate Password main Error
 */
class GenPasswordError {
  /**
   * @constructs
   * @param {string} message - Inform the error message
   * @param {number} code - Inform the error code
   */
  constructor(message, code) {
    this.name = "GenPasswordError";
    this.message = message;
    this.code = code;
  }
}

/**
 * Invalid Type Error (code: 400)
 * @augments GenPasswordError
 */
class InvalidTypeError extends GenPasswordError {
  /**
   * @constructs
   */
  constructor() {
    super("Invalid Type", 400);
  }
}

/**
 * Invalid Dimension Error (code: 400)
 * @augments GenPasswordError
 */
class InvalidDimensionError extends GenPasswordError {
  /**
   * @constructs
   */
  constructor() {
    super("Invalid Dimension", 400);
  }
}

/**
 * Type Not Found Error (code: 404)
 * @augments GenPasswordError
 */
class TypeNotFoundError extends GenPasswordError {
  /**
   * @constructs
   */
  constructor() {
    super("Type Not Found", 404);
  }
}

/**
 * Dimension Not Found Error (code: 404)
 * @augments GenPasswordError
 */
class DimensionNotFoundError extends GenPasswordError {
  /**
   * @constructs
   */
  constructor() {
    super("Dimension Not Found", 404);
  }
}

export { GenPasswordError, InvalidTypeError, InvalidDimensionError, TypeNotFoundError, DimensionNotFoundError };
