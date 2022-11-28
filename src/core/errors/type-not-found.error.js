// @ts-check

import { GenPasswordError } from "@errors/gen-password.error";

/**
 * Type Not Found Error (code: 404)
 * @augments GenPasswordError
 */
export class TypeNotFoundError extends GenPasswordError {
    /**
     * @constructs
     */
    constructor() {
        super("Type Not Found", 404);
    }
}
