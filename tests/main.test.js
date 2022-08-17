import { GenPassword, Types, Dimensions, GenPasswordError } from "@/index"

test("abc", async () => {
  try {
    await GenPassword(9, 9);
  } catch (err) {
    // criar uma lista de 
    console.log(err.stack);
  }
});

test("Invalid Type", async () => {
  await expect(GenPassword(9, 9)).rejects.toEqual(
    new GenPasswordError(
      "Type Not Found",
      new TypeError("Type Not Found")
    )
  );
});

test("Invalid Dimension", async () => {
  await expect(GenPassword(Types.ONLY_NUMBERS, 9)).rejects.toEqual(
    new GenPasswordError(
      "Dimension Not Found",
      new TypeError("Dimension Not Found")
    )
  );
});

test("Valid", async () => {
  const result = await GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR);
  expect(result).toHaveLength(Dimensions.FOUR);
  expect(Number(result)).not.toBeNaN();
});