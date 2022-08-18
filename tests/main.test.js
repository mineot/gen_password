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
}

test("Main - Invalids", async () => {
  await FailTest(async () => await GenPassword("A", "A"), "type.invalid", 400);
  await FailTest(async () => await GenPassword(9, "A"), "type.not.found", 404);
  await FailTest(async () => await GenPassword(Types.ONLY_NUMBERS, "A"), "dimension.invalid", 400);
  await FailTest(async () => await GenPassword(Types.ONLY_NUMBERS, 9), "dimension.not.found", 404);
});

test("Main - Success", async () => {
  Object.values(Types).forEach(type => {
    Object.values(Dimensions).forEach(dim => {
      SuccessTest(type, dim);
    });
  });
});
