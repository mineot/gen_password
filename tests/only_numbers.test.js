import { Dimensions } from "../src/models/dimensions";
import gen from "./../src/generators/only_numbers";

async function SharedTest(dimension) {
  const result = await gen(dimension);
  expect(result).toHaveLength(dimension);
  expect(Number(result)).not.toBeNaN();
}

test("Only Numbers - Dimensions.FOUR", async () => await SharedTest(Dimensions.FOUR));
test("Only Numbers - Dimensions.SIX", async () => await SharedTest(Dimensions.SIX));
test("Only Numbers - Dimensions.EIGTH", async () => await SharedTest(Dimensions.EIGTH));
test("Only Numbers - Dimensions.TEN", async () => await SharedTest(Dimensions.TEN));
test("Only Numbers - Dimensions.TWELVE", async () => await SharedTest(Dimensions.TWELVE));
test("Only Numbers - Dimensions.FOURTEEN", async () => await SharedTest(Dimensions.FOURTEEN));
test("Only Numbers - Dimensions.SIXTEEN", async () => await SharedTest(Dimensions.SIXTEEN));
test("Only Numbers - Dimensions.EIGHTEENTEEN", async () => await SharedTest(Dimensions.EIGHTEENTEEN));
test("Only Numbers - Dimensions.TWENTY", async () => await SharedTest(Dimensions.TWENTY));
