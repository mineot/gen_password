import { ERROR } from "@/models/errors";

const Types = {
  ONLY_NUMBERS: 100,
  ONLY_ALPHAS: 101,
  ALPHA_NUMERIC: 102,
  COMPLEX: 103,
};

const TypeValidator = async (type) => {
  if (isNaN(type)) {
    throw ERROR.INVALID.TYPE();
  }

  if (!Object.values(Types).includes(type)) {
    throw ERROR.NOT_FOUND.TYPE();
  }

  return true;
};

export { Types, TypeValidator };
