import gen_password from "./../src";

test("numeric_only - dimension 4", () => {
  const result = gen_password("numeric_only", 4);
  expect(result).toHaveLength(4);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 6", () => {
  const result = gen_password("numeric_only", 6);
  expect(result).toHaveLength(6);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 8", () => {
  const result = gen_password("numeric_only", 8);
  expect(result).toHaveLength(8);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 10", () => {
  const result = gen_password("numeric_only", 10);
  expect(result).toHaveLength(10);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 12", () => {
  const result = gen_password("numeric_only", 12);
  expect(result).toHaveLength(12);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 14", () => {
  const result = gen_password("numeric_only", 14);
  expect(result).toHaveLength(14);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 16", () => {
  const result = gen_password("numeric_only", 16);
  expect(result).toHaveLength(16);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 18", () => {
  const result = gen_password("numeric_only", 18);
  expect(result).toHaveLength(18);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - dimension 20", () => {
  const result = gen_password("numeric_only", 20);
  expect(result).toHaveLength(20);
  expect(Number(result)).not.toBeNaN();
});

test("numeric_only - invalid dimension", () => {
  expect(() => {
    gen_password("numeric_only", 999);
  }).toThrow("generate.password.number_only.invalid_dimension");
});
