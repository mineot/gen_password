import { Dimensions } from "../src/models/dimensions";
import gen from "../src/generators/only_alphas";

const data = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lower: "abcdefghijklmnopqrstuvwxyz".split(""),
}

const TestUpper = (text) => text.split("").filter(el => data.upper.includes(el));
const TestLower = (text) => text.split("").filter(el => data.lower.includes(el));

const Test = async (dimension) => {
  const result = await gen(dimension);
  expect(result).toHaveLength(dimension);
  expect(TestUpper(result)).toHaveLength(dimension / 2);
  expect(TestLower(result)).toHaveLength(dimension / 2);
};

test("Only Alpha - Dimensions.FOUR", async () => await Test(Dimensions.FOUR));
test("Only Alpha - Dimensions.SIX", async () => await Test(Dimensions.SIX));
test("Only Alpha - Dimensions.EIGTH", async () => await Test(Dimensions.EIGTH));
test("Only Alpha - Dimensions.TEN", async () => await Test(Dimensions.TEN));
test("Only Alpha - Dimensions.TWELVE", async () => await Test(Dimensions.TWELVE));
test("Only Alpha - Dimensions.FOURTEEN", async () => await Test(Dimensions.FOURTEEN));
test("Only Alpha - Dimensions.SIXTEEN", async () => await Test(Dimensions.SIXTEEN));
test("Only Alpha - Dimensions.EIGHTEENTEEN", async () => await Test(Dimensions.EIGHTEENTEEN));
test("Only Alpha - Dimensions.TWENTY", async () => await Test(Dimensions.TWENTY));
