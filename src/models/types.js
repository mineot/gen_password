import { ERRORS } from "@/models/errors";

const Types = {
  ONLY_NUMBERS: 100,
  ONLY_ALPHAS: 101,
  ALPHA_NUMERIC: 102,
  COMPLEX: 103,
};

const TypeValidator = async (type) => {
  if (isNaN(type)) {
    throw ERRORS.TYPE.INVALID();
  }

  if (!Object.values(Types).includes(type)) {
    throw ERRORS.TYPE.NOT_FOUND();
  }

  return true;
};

export { Types, TypeValidator };
