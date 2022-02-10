import numeric_only from "./numeric_only";
import alpha_only from "./alpha_only";
import alpha_numeric from "./alpha_numeric";
import complex from "./complex";

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

export default function (arr, type, dimension) {
  let password = get(type, dimension);
  while (arr.includes(password)) password = get(type, dimension);
  return password;
}
