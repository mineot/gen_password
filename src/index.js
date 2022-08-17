import { Dimensions, DimensionError, DimensionValidate } from "@/models/dimensions";
import { Types, TypeError, TypeValidate } from "@/models/types";

import only_numbers from "@/generators/only_numbers";
import only_alphas from "@/generators/only_alphas";
import alpha_numeric from "@/generators/alpha_numeric";
import complex from "@/generators/complex";

const data = {
  [Types.ONLY_NUMBERS]: only_numbers,
  [Types.ONLY_ALPHAS]: only_alphas,
  [Types.ALPHA_NUMERIC]: alpha_numeric,
  [Types.COMPLEX]: complex,
}

class GenPasswordError extends Error {
  constructor(msg, cause) {
    super(msg);
    this.name = "GenPasswordError";
    this.stack = cause;
  }
}

const GenPassword = async (type, dimension) => {
  try {
    await TypeValidate(type);
    await DimensionValidate(dimension);
    return await data[type](dimension);
  } catch (err) {
    throw new GenPasswordError(err.message, err);
  }
};

export {
  GenPassword,
  GenPasswordError,
  Types,
  TypeError,
  Dimensions,
  DimensionError,
};
