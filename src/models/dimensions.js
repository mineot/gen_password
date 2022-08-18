import { ERRORS } from "@/models/errors";

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
