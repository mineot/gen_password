// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";

/**
 * Invalid Type Error (code: 400)
 * @augments GenPasswordError
 */
export class InvalidTypeError extends GenPasswordError {
    /**
     * @constructs
     */
    constructor() {
        super("Invalid Type", 400);
    }
}
