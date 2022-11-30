// @ts-check

/**
 * <table>
 *   <thead>
 *       <tr> <th colspan="2">Types Enum</th> </tr>
 *       <tr> <th>Member</th> <th>Value</th> </tr>
 *   </thead>
 *   <tbody>
 *      <tr> <td>ONLY_NUMBERS</td> <td>only_numbers</td> </tr>
 *      <tr> <td>ONLY_ALPHAS</td> <td>only_alphas</td> </tr>
 *      <tr> <td>ALPHA_NUMERICS</td> <td>alpha_numerics</td> </tr>
 *      <tr> <td>COMPLEX</td> <td>complex</td> </tr>
 *  </tbody>
 * </table>
 * @readonly
 * @enum { string } 
 */
export const TypeEnum = {
  /**
   * Only accept numbers
   */
  ONLY_NUMBERS: "only_numbers",

  /**
   * Only accept characters
   */
  ONLY_ALPHAS: "only_alphas",

  /**
   * Accept characters and numbers
   */
  ALPHA_NUMERICS: "alpha_numerics",

  /**
   * Accept characters, numbers and special characters
   */
  COMPLEX: "complex",
};
