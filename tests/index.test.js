import gen_password from "./../src";

test("index - invalid type", () => {
  expect(() => {
    gen_password("ABC", 999);
  }).toThrow("generate.password.invalid_type");
});
