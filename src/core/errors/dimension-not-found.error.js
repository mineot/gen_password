// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";

/**
 * Dimension Not Found Error (code: 404)
 * @augments GenPasswordError
 */
export class DimensionNotFoundError extends GenPasswordError {
    /**
     * @constructs
     */
    constructor() {
        super("Dimension Not Found", 404);
    }
}
