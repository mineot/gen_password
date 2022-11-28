// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";

/**
 * Validate if is a valid dimension enum
 * @param { string } type
 * @throws { InvalidDimensionError }
 * @returns { Promise<boolean> }
 */
export const DimensionValidator = async function (type) {
  const values = Object.values(DimensionEnum);
  if (typeof type !== "number" || !values.includes(type)) {
    throw new InvalidDimensionError();
  }
  return true;
};
