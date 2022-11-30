// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";

/**
 * Invalid Dimension Error (code: 400)
 * @augments GenPasswordError
 * @ignore
 */
export class InvalidDimensionError extends GenPasswordError {
  /**
   * @constructs
   */
  constructor() {
    super("Invalid Dimension", 400);
  }
}
