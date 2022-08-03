import { Types, Dimensions, ValidateType, ValidateDimension } from "@/helpers/enums";

const GenPassword = async (type, dimension) => {
  try {
    await ValidateType(type);
    await ValidateDimension(dimension);

    return true;
  } catch (err) {
    throw `GenPassword Error: ${err}`;
  }
};

export { GenPassword, Types, Dimensions };
