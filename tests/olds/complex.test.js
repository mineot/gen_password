import { Dimensions } from "@/models/dimensions";
import gen from "../src/generators/complex";

const data = {
  base: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    chars: "@#!$+&%*|:?)(][}{;,.",
  },
  values: {
    [Dimensions.FOUR]: { upper: 1, lower: 1, number: 1, char: 1 },
    [Dimensions.SIX]: { upper: 1, lower: 2, number: 2, char: 1 },
    [Dimensions.EIGTH]: { upper: 2, lower: 2, number: 2, char: 2 },
    [Dimensions.TEN]: { upper: 3, lower: 3, number: 2, char: 2 },
    [Dimensions.TWELVE]: { upper: 3, lower: 3, number: 3, char: 3 },
    [Dimensions.FOURTEEN]: { upper: 4, lower: 4, number: 4, char: 2 },
    [Dimensions.SIXTEEN]: { upper: 4, lower: 4, number: 4, char: 4 },
    [Dimensions.EIGHTEENTEEN]: { upper: 5, lower: 5, number: 5, char: 3 },
    [Dimensions.TWENTY]: { upper: 5, lower: 5, number: 5, char: 5 },
  }
}

const Get = (result) => {
  return {
    upper: result.split("").filter((el) => data.base.upper.split("").includes(el)),
    lower: result.split("").filter((el) => data.base.lower.split("").includes(el)),
    number: result.split("").filter((el) => data.base.number.split("").includes(el)),
    char: result.split("").filter((el) => data.base.chars.split("").includes(el)),
  };
}

const Test = async (dimension) => {
  const result = await gen(dimension);
  const verify = Get(result);
  expect(result).toHaveLength(dimension);
  expect(verify.upper).toHaveLength(data.values[dimension].upper);
  expect(verify.lower).toHaveLength(data.values[dimension].lower);
  expect(verify.number).toHaveLength(data.values[dimension].number);
  expect(verify.char).toHaveLength(data.values[dimension].char);
}

test("Complex - Dimensions.FOUR", async () => await Test(Dimensions.FOUR));
test("Complex - Dimensions.SIX", async () => await Test(Dimensions.SIX));
test("Complex - Dimensions.EIGTH", async () => await Test(Dimensions.EIGTH));
test("Complex - Dimensions.TEN", async () => await Test(Dimensions.TEN));
test("Complex - Dimensions.TWELVE", async () => await Test(Dimensions.TWELVE));
test("Complex - Dimensions.FOURTEEN", async () => await Test(Dimensions.FOURTEEN));
test("Complex - Dimensions.SIXTEEN", async () => await Test(Dimensions.SIXTEEN));
test("Complex - Dimensions.EIGHTEENTEEN", async () => await Test(Dimensions.EIGHTEENTEEN));
test("Complex - Dimensions.TWENTY", async () => await Test(Dimensions.TWENTY)); 