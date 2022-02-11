import gen_password from "../src";

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = upper.toLowerCase();

function get_upper_lower(data) {
  return {
    upper: data.split("").filter((el) => upper.split("").includes(el)),
    lower: data.split("").filter((el) => lower.split("").includes(el)),
  };
}

test("alpha_only - dimension 4", () => {
  const result = gen_password("alpha_only", 4);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(4);
  expect(exist.upper).toHaveLength(2);
  expect(exist.lower).toHaveLength(2);
});

test("alpha_only - dimension 6", () => {
  const result = gen_password("alpha_only", 6);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(6);
  expect(exist.upper).toHaveLength(3);
  expect(exist.lower).toHaveLength(3);
});

test("alpha_only - dimension 8", () => {
  const result = gen_password("alpha_only", 8);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(8);
  expect(exist.upper).toHaveLength(4);
  expect(exist.lower).toHaveLength(4);
});

test("alpha_only - dimension 10", () => {
  const result = gen_password("alpha_only", 10);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(10);
  expect(exist.upper).toHaveLength(5);
  expect(exist.lower).toHaveLength(5);
});

test("alpha_only - dimension 12", () => {
  const result = gen_password("alpha_only", 12);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(12);
  expect(exist.upper).toHaveLength(6);
  expect(exist.lower).toHaveLength(6);
});

test("alpha_only - dimension 14", () => {
  const result = gen_password("alpha_only", 14);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(14);
  expect(exist.upper).toHaveLength(7);
  expect(exist.lower).toHaveLength(7);
});

test("alpha_only - dimension 16", () => {
  const result = gen_password("alpha_only", 16);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(16);
  expect(exist.upper).toHaveLength(8);
  expect(exist.lower).toHaveLength(8);
});

test("alpha_only - dimension 18", () => {
  const result = gen_password("alpha_only", 18);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(18);
  expect(exist.upper).toHaveLength(9);
  expect(exist.lower).toHaveLength(9);
});

test("alpha_only - dimension 20", () => {
  const result = gen_password("alpha_only", 20);
  const exist = get_upper_lower(result);
  expect(result).toHaveLength(20);
  expect(exist.upper).toHaveLength(10);
  expect(exist.lower).toHaveLength(10);
});

test("alpha_only - invalid dimension", () => {
  expect(() => {
    gen_password("alpha_only", 999);
  }).toThrow("generate.password.alpha_only.invalid_dimension");
});
