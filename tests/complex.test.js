import gen_password from "../src";

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();
const numbers = "0123456789";
const chars = "@#!$+&%*|:?";

function get(data) {
  return {
    upper: data.split("").filter((el) => upper.split("").includes(el)),
    lower: data.split("").filter((el) => lower.split("").includes(el)),
    number: data.split("").filter((el) => numbers.split("").includes(el)),
    char: data.split("").filter((el) => chars.split("").includes(el)),
  };
}

test("complex - dimension 4", () => {
  const result = gen_password("complex", 4);
  const exist = get(result);
  expect(result).toHaveLength(4);
  expect(exist.upper).toHaveLength(1);
  expect(exist.lower).toHaveLength(1);
  expect(exist.number).toHaveLength(1);
  expect(exist.char).toHaveLength(1);
});

test("complex - dimension 6", () => {
  const result = gen_password("complex", 6);
  const exist = get(result);
  expect(result).toHaveLength(6);
  expect(exist.upper).toHaveLength(1);
  expect(exist.lower).toHaveLength(2);
  expect(exist.number).toHaveLength(2);
  expect(exist.char).toHaveLength(1);
});

test("complex - dimension 8", () => {
  const result = gen_password("complex", 8);
  const exist = get(result);
  expect(result).toHaveLength(8);
  expect(exist.upper).toHaveLength(2);
  expect(exist.lower).toHaveLength(2);
  expect(exist.number).toHaveLength(2);
  expect(exist.char).toHaveLength(2);
});

test("complex - dimension 10", () => {
  const result = gen_password("complex", 10);
  const exist = get(result);
  expect(result).toHaveLength(10);
  expect(exist.upper).toHaveLength(3);
  expect(exist.lower).toHaveLength(3);
  expect(exist.number).toHaveLength(2);
  expect(exist.char).toHaveLength(2);
});

test("complex - dimension 12", () => {
  const result = gen_password("complex", 12);
  const exist = get(result);
  expect(result).toHaveLength(12);
  expect(exist.upper).toHaveLength(3);
  expect(exist.lower).toHaveLength(3);
  expect(exist.number).toHaveLength(3);
  expect(exist.char).toHaveLength(3);
});

test("complex - dimension 14", () => {
  const result = gen_password("complex", 14);
  const exist = get(result);
  expect(result).toHaveLength(14);
  expect(exist.upper).toHaveLength(4);
  expect(exist.lower).toHaveLength(4);
  expect(exist.number).toHaveLength(4);
  expect(exist.char).toHaveLength(2);
});

test("complex - dimension 16", () => {
  const result = gen_password("complex", 16);
  const exist = get(result);
  expect(result).toHaveLength(16);
  expect(exist.upper).toHaveLength(4);
  expect(exist.lower).toHaveLength(4);
  expect(exist.number).toHaveLength(4);
  expect(exist.char).toHaveLength(4);
});

test("complex - dimension 18", () => {
  const result = gen_password("complex", 18);
  const exist = get(result);
  expect(result).toHaveLength(18);
  expect(exist.upper).toHaveLength(5);
  expect(exist.lower).toHaveLength(5);
  expect(exist.number).toHaveLength(5);
  expect(exist.char).toHaveLength(3);
});

test("complex - dimension 20", () => {
  const result = gen_password("complex", 20);
  const exist = get(result);
  expect(result).toHaveLength(20);
  expect(exist.upper).toHaveLength(5);
  expect(exist.lower).toHaveLength(5);
  expect(exist.number).toHaveLength(5);
  expect(exist.char).toHaveLength(5);
});

test("complex - invalid dimension", () => {
  expect(() => {
    gen_password("complex", 999);
  }).toThrow("generate.password.complex.invalid_dimension");
});
