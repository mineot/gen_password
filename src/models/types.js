const Types = {
  ONLY_NUMBERS: 1,
  ONLY_ALPHAS: 2,
  ALPHA_NUMERIC: 3,
  COMPLEX: 4,
};

class TypeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "TypeError";
  }
}

const TypeValidate = async (type) => {
  if (isNaN(type)) {
    throw new TypeError("Invalid Type");
  }

  if (!Object.values(Types).includes(type)) {
    throw new TypeError("Type Not Found");
  }

  return true;
};

export { Types, TypeError, TypeValidate };
