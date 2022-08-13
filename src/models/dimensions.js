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

class DimensionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "DimensionError";
  }
}

const DimensionValidate = async (dimension) => {
  if (isNaN(dimension)) {
    throw new DimensionError("Invalid Dimension");
  }

  if (!Object.values(Dimensions).includes(dimension)) {
    throw new DimensionError("Dimension Not Found");
  }

  return true;
};

export { Dimensions, DimensionError, DimensionValidate };
