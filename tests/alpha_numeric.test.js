import { Dimensions } from '@/models/dimensions';
import gen from "../src/generators/alpha_numeric";

const data = {
  base: {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
  },
  values: {
    [Dimensions.FOUR]: { upper: 1, lower: 1, number: 2 },
    [Dimensions.SIX]: { upper: 2, lower: 2, number: 2 },
    [Dimensions.EIGTH]: { upper: 2, lower: 3, number: 3 },
    [Dimensions.TEN]: { upper: 4, lower: 4, number: 2 },
    [Dimensions.TWELVE]: { upper: 4, lower: 4, number: 4 },
    [Dimensions.FOURTEEN]: { upper: 5, lower: 5, number: 4 },
    [Dimensions.SIXTEEN]: { upper: 5, lower: 5, number: 6 },
    [Dimensions.EIGHTEENTEEN]: { upper: 6, lower: 6, number: 6 },
    [Dimensions.TWENTY]: { upper: 7, lower: 7, number: 6 },
  }
}

const Get = (result) => {
  return {
    upper: result.split("").filter((el) => data.base.upper.split("").includes(el)),
    lower: result.split("").filter((el) => data.base.lower.split("").includes(el)),
    number: result.split("").filter((el) => data.base.number.split("").includes(el)),
  };
}

async function Test(dimension) {
  const result = await gen(dimension);
  const verify = Get(result);
  expect(result).toHaveLength(dimension);
  expect(verify.upper).toHaveLength(data.values[dimension].upper);
  expect(verify.lower).toHaveLength(data.values[dimension].lower);
  expect(verify.number).toHaveLength(data.values[dimension].number);
}

test("Alpha Numeric - Dimensions.FOUR", async () => Test(Dimensions.FOUR));
test("Alpha Numeric - Dimensions.SIX", async () => Test(Dimensions.SIX));
test("Alpha Numeric - Dimensions.EIGTH", async () => Test(Dimensions.EIGTH));
test("Alpha Numeric - Dimensions.TEN", async () => Test(Dimensions.TEN));
test("Alpha Numeric - Dimensions.TWELVE", async () => Test(Dimensions.TWELVE));
test("Alpha Numeric - Dimensions.FOURTEEN", async () => Test(Dimensions.FOURTEEN));
test("Alpha Numeric - Dimensions.SIXTEEN", async () => Test(Dimensions.SIXTEEN));
test("Alpha Numeric - Dimensions.EIGHTEENTEEN", async () => Test(Dimensions.EIGHTEENTEEN));
test("Alpha Numeric - Dimensions.TWENTY", async () => Test(Dimensions.TWENTY)); 