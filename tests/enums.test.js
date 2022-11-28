// @ts-check

import { TypeEnum } from "@enums/type.enums";

test("Enum - Count Keys", () => {
  expect(Object.keys(TypeEnum).length).toEqual(4);
});

test("Enum - String Values", () => {
  Object.keys(TypeEnum).forEach((key) => {
    expect(typeof TypeEnum[key]).toEqual("string");
  });
});

test("Enum - Key & Value", () => {
  expect(TypeEnum.ONLY_NUMBERS).toEqual("only_numbers");
  expect(TypeEnum.ONLY_ALPHAS).toEqual("only_alphas");
  expect(TypeEnum.ALPHA_NUMERICS).toEqual("alpha_numerics");
  expect(TypeEnum.COMPLEX).toEqual("complex");
});
