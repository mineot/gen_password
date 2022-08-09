import { Types, Dimensions } from "@/helpers/enumerators";
import { ValidateType, ValidateDimension } from "@/helpers/validators";

import { OnlyNumbers } from "@/generators";

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
