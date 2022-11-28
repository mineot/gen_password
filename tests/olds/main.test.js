import { GenPassword, GenPasswordError, Types, Dimensions } from "../src/index";

const FailTest = async (fn, message, code) => {
  try {
    await fn();
  } catch (err) {
    expect(err).toBeInstanceOf(GenPasswordError);
    expect(err.message).toEqual(message);
    expect(err.code).toEqual(code);
  }
};

const SuccessTest = async (type, dim) => {
  const result = await GenPassword(type, dim);
  expect(result).toHaveLength(dim);
};

test("Main - Invalids", async () => {
  await FailTest(async () => await GenPassword("A", "A"), "Invalid Type", 400);
  await FailTest(async () => await GenPassword(9, "A"), "Type Not Found", 404);
  await FailTest(async () => await GenPassword(Types.ONLY_NUMBERS, "A"), "Invalid Dimension", 400);
  await FailTest(async () => await GenPassword(Types.ONLY_NUMBERS, 9), "Dimension Not Found", 404);
});

test("Main - Success", async () => {
  Object.values(Types).forEach((type) => {
    Object.values(Dimensions).forEach((dim) => {
      SuccessTest(type, dim);
    });
  });
});
