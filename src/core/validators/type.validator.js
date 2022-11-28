// @ts-check

import { TypeEnum } from "@enums/type.enums";
import { InvalidTypeError } from "@errors/invalid-type.error";

/**
 * Validate if is a valid type enum
 * @param { string } type 
 * @throws { InvalidTypeError }
 * @returns { Promise<boolean> }
 */
export const TypeValidator = async function (type) {
    const values = Object.values(TypeEnum);
    if (typeof type !== "string" || !values.includes(type)) {
        throw new InvalidTypeError();
    }
    return true;
};
