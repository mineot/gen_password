// import { GenPassword, Types, Dimensions } from "../src";
// import { UpperLetters, LowerLetters } from "@/helpers/alphas";

// const check = (result, target) => result.split("").filter((el) => target.split("").includes(el));
// const upper = (result) => check(result, UpperLetters);
// const lower = (result) => check(result, LowerLetters);

// const Test = async (dimension) => {
//   const result = await GenPassword(Types.ONLY_ALPHA, dimension);
//   console.log(result, result.length);
//   expect(result).toHaveLength(4);
//   expect(upper(result)).toHaveLength(2);
//   expect(lower(result)).toHaveLength(2);
// };

// test("Only Alpha - Dimensions.FOUR", async () => {
//   await Test(Dimensions.FOUR);
// });

// // test("Only Alpha - dimension 6", () => {
// //   const result = gen_password("alpha_only", 6);
// //   const exist = get(result);
// //   expect(result).toHaveLength(6);
// //   expect(exist.upper).toHaveLength(3);
// //   expect(exist.lower).toHaveLength(3);
// // });

// // test("Only Alpha - dimension 8", () => {
// //   const result = gen_password("alpha_only", 8);
// //   const exist = get(result);
// //   expect(result).toHaveLength(8);
// //   expect(exist.upper).toHaveLength(4);
// //   expect(exist.lower).toHaveLength(4);
// // });

// // test("Only Alpha - dimension 10", () => {
// //   const result = gen_password("alpha_only", 10);
// //   const exist = get(result);
// //   expect(result).toHaveLength(10);
// //   expect(exist.upper).toHaveLength(5);
// //   expect(exist.lower).toHaveLength(5);
// // });

// // test("Only Alpha - dimension 12", () => {
// //   const result = gen_password("alpha_only", 12);
// //   const exist = get(result);
// //   expect(result).toHaveLength(12);
// //   expect(exist.upper).toHaveLength(6);
// //   expect(exist.lower).toHaveLength(6);
// // });

// // test("Only Alpha - dimension 14", () => {
// //   const result = gen_password("alpha_only", 14);
// //   const exist = get(result);
// //   expect(result).toHaveLength(14);
// //   expect(exist.upper).toHaveLength(7);
// //   expect(exist.lower).toHaveLength(7);
// // });

// // test("Only Alpha - dimension 16", () => {
// //   const result = gen_password("alpha_only", 16);
// //   const exist = get(result);
// //   expect(result).toHaveLength(16);
// //   expect(exist.upper).toHaveLength(8);
// //   expect(exist.lower).toHaveLength(8);
// // });

// // test("Only Alpha - dimension 18", () => {
// //   const result = gen_password("alpha_only", 18);
// //   const exist = get(result);
// //   expect(result).toHaveLength(18);
// //   expect(exist.upper).toHaveLength(9);
// //   expect(exist.lower).toHaveLength(9);
// // });

// // test("Only Alpha - dimension 20", () => {
// //   const result = gen_password("alpha_only", 20);
// //   const exist = get(result);
// //   expect(result).toHaveLength(20);
// //   expect(exist.upper).toHaveLength(10);
// //   expect(exist.lower).toHaveLength(10);
// // });

test("Only Alpha - invalid dimension", () => {
  // //   expect(() => {
  // //     gen_password("alpha_only", 999);
  // //   }).toThrow("generate.password.alpha_only.invalid_dimension");
});
