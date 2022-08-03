const Types = {
  ONLY_NUMBERS: 1,
  ONLY_ALPHA: 2,
  ALPHA_NUMERIC: 3,
  COMPLEX: 4,
};

const Dimensions = {
  FOUR: 4,
  SIX: 6,
  EIGTH: 8,
  TEN: 10,
  TWELVE: 12,
  FOURTEEN: 14,
  SIXTEEN: 16,
  EIGHTEENTEEN: 18,
  TWENTY: 20,
};

const Validation = async (item, arr, message) => {
  if (Number.isInteger(item)) {
    if (Object.values(arr).filter((el) => item === el).length === 0) {
      throw message;
    }
  }
  return true;
};

const ValidateType = async (type) => {
  return Validation(type, Types, "Invalid Type");
};

const ValidateDimension = async (dimension) => {
  return Validation(dimension, Dimensions, "Invalid Dimension");
};

export { Types, Dimensions, ValidateType, ValidateDimension };
