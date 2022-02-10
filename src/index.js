import numeric_only from "./helpers/numeric_only";
import alpha_only from "./helpers/alpha_only";
import alpha_numeric from "./helpers/alpha_numeric";
import complex from "./helpers/complex";

function get(type, dimension) {
  switch (type) {
    case "numeric_only":
      return numeric_only(dimension);
    case "alpha_only":
      return alpha_only(dimension);
    case "alpha_numeric":
      return alpha_numeric(dimension);
    case "complex":
      return complex(dimension);
  }
}

function Generator(arr, type, dimension) {
  let password = get(type, dimension);
  while (arr.includes(password)) password = get(type, dimension);
  return password;
}

export { Generator };
