import { Types, Dimensions, GenPassword } from "../src";

test("Invalid Type", async () => {
  await expect(() => GenPassword(999, 999)).rejects.toEqual("GenPassword Error: Invalid Type");
  await expect(() => GenPassword(999, Dimensions.FOUR)).rejects.toEqual("GenPassword Error: Invalid Type");
});

test("Invalid Dimension", async () => {
  await expect(() => GenPassword(Types.ONLY_NUMBERS, 999)).rejects.toEqual("GenPassword Error: Invalid Dimension");
});

test("All Valid", async () => {
  await expect(() => GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR)).resolves;
});
