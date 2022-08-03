import { Dimensions, GenPassword, Types } from "./../src";

test("Index - Invalid Type", async () => {
  await expect(() => GenPassword(999, 999)).rejects.toEqual("GenPassword Error: Invalid Type");
});

test("Index - Invalid Dimension", async () => {
  expect(() => GenPassword(Types.ONLY_NUMBERS, 999)).rejects.toEqual("GenPassword Error: Invalid Dimension");
});
