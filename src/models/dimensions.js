import { ERRORS } from "@/models/errors";

const Dimensions = {
  FOUR: 204,
  SIX: 206,
  EIGTH: 208,
  TEN: 210,
  TWELVE: 212,
  FOURTEEN: 214,
  SIXTEEN: 216,
  EIGHTEENTEEN: 218,
  TWENTY: 220,
};

const DimensionValidator = async (dimension) => {
  if (isNaN(dimension)) {
    throw ERRORS.DIMENSION.INVALID();
  }

  if (!Object.values(Dimensions).includes(dimension)) {
    throw ERRORS.DIMENSION.NOT_FOUND();
  }

  return true;
};

export { Dimensions, DimensionValidator };
