import numeric_only from "./helpers/numeric_only";
import alpha_only from "./helpers/alpha_only";
import alpha_numeric from "./helpers/alpha_numeric";
import complex from "./helpers/complex";

export default function (type, dimension) {
  switch (type) {
    case "numeric_only":
      return numeric_only(dimension);
    case "alpha_only":
      return alpha_only(dimension);
    case "alpha_numeric":
      return alpha_numeric(dimension);
    case "complex":
      return complex(dimension);
    default:
      throw new Error("generate.password.type.not_found");
  }
}
