// @ts-check

/**
 * Generate Password Errors
 */
export class GenPasswordError {
    /**
     * @constructs
     * @param { string } message - Inform the error message
     * @param { number } code - Inform the error code
     */
    constructor(message, code) {
        this.name = "GenPasswordError";
        this.message = message;
        this.code = code;
    }
}
