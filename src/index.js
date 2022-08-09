import { Types, Dimensions, ValidateType, ValidateDimension } from "@/helpers/enums";
import OnlyNumbers from "@/generators/only_numbers";

const GenPassword = async (type, dimension) => {
  try {
    await ValidateType(type);
    await ValidateDimension(dimension);

    switch (type) {
      case Types.ONLY_NUMBERS:
        return await OnlyNumbers(dimension);
    }

    return false;
  } catch (err) {
    throw `GenPassword Error: ${err}`;
  }
};

export { GenPassword, Types, Dimensions };
