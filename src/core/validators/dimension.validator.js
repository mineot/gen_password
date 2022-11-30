// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { InvalidDimensionError } from "@errors/invalid-dimension.error";

/**
 * Validate if is a valid dimension enum
 * @param { number } dimension
 * @throws { InvalidDimensionError }
 * @returns { Promise<boolean> }
 */
export const DimensionValidator = async function (dimension) {
  const values = Object.values(DimensionEnum);
  if (typeof dimension !== "number" || !values.includes(dimension)) {
    throw new InvalidDimensionError();
  }
  return true;
};
