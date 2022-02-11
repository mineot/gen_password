import gen_password from "../src";

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const numbers = "0123456789";

function get(data) {
  return {
    upper: data.split("").filter((el) => upper.split("").includes(el)),
    lower: data.split("").filter((el) => lower.split("").includes(el)),
    number: data.split("").filter((el) => numbers.split("").includes(el)),
  };
}

test("alpha_numeric - dimension 4", () => {
  const result = gen_password("alpha_numeric", 4);
  const exist = get(result);
  expect(result).toHaveLength(4);
  expect(exist.upper).toHaveLength(1);
  expect(exist.lower).toHaveLength(1);
  expect(exist.number).toHaveLength(2);
});

test("alpha_numeric - dimension 6", () => {
  const result = gen_password("alpha_numeric", 6);
  const exist = get(result);
  expect(result).toHaveLength(6);
  expect(exist.upper).toHaveLength(2);
  expect(exist.lower).toHaveLength(2);
  expect(exist.number).toHaveLength(2);
});

test("alpha_numeric - dimension 8", () => {
  const result = gen_password("alpha_numeric", 8);
  const exist = get(result);
  expect(result).toHaveLength(8);
  expect(exist.upper).toHaveLength(2);
  expect(exist.lower).toHaveLength(3);
  expect(exist.number).toHaveLength(3);
});

test("alpha_numeric - dimension 10", () => {
  const result = gen_password("alpha_numeric", 10);
  const exist = get(result);
  expect(result).toHaveLength(10);
  expect(exist.upper).toHaveLength(4);
  expect(exist.lower).toHaveLength(4);
  expect(exist.number).toHaveLength(2);
});

test("alpha_numeric - dimension 12", () => {
  const result = gen_password("alpha_numeric", 12);
  const exist = get(result);
  expect(result).toHaveLength(12);
  expect(exist.upper).toHaveLength(4);
  expect(exist.lower).toHaveLength(4);
  expect(exist.number).toHaveLength(4);
});

test("alpha_numeric - dimension 14", () => {
  const result = gen_password("alpha_numeric", 14);
  const exist = get(result);
  expect(result).toHaveLength(14);
  expect(exist.upper).toHaveLength(5);
  expect(exist.lower).toHaveLength(5);
  expect(exist.number).toHaveLength(4);
});

test("alpha_numeric - dimension 16", () => {
  const result = gen_password("alpha_numeric", 16);
  const exist = get(result);
  expect(result).toHaveLength(16);
  expect(exist.upper).toHaveLength(5);
  expect(exist.lower).toHaveLength(5);
  expect(exist.number).toHaveLength(6);
});

test("alpha_numeric - dimension 18", () => {
  const result = gen_password("alpha_numeric", 18);
  const exist = get(result);
  expect(result).toHaveLength(18);
  expect(exist.upper).toHaveLength(6);
  expect(exist.lower).toHaveLength(6);
  expect(exist.number).toHaveLength(6);
});

test("alpha_numeric - dimension 20", () => {
  const result = gen_password("alpha_numeric", 20);
  const exist = get(result);
  expect(result).toHaveLength(20);
  expect(exist.upper).toHaveLength(7);
  expect(exist.lower).toHaveLength(7);
  expect(exist.number).toHaveLength(6);
});

test("alpha_numeric - invalid dimension", () => {
  expect(() => {
    gen_password("alpha_numeric", 999);
  }).toThrow("generate.password.alpha_numeric.invalid_dimension");
});
