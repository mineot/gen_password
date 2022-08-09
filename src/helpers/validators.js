import { Types, Dimensions } from "./enumerators";

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

export { ValidateType, ValidateDimension };
