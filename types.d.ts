/**
 * Generate Password Module Declaration
 * @ignore
 */
declare module "@mineot/gen_password" {
  /**
   * Types
   * @enum { string }
   * @ignore
   */
  export enum TypeEnum {
    ONLY_NUMBERS = "only_numbers",
    ONLY_ALPHAS = "only_alphas",
    ALPHA_NUMERICS = "alpha_numerics",
    COMPLEX = "complex",
  }

  /**
   * Dimensions
   * @enum { number }
   * @ignore
   */
  export enum DimensionEnum {
    FOUR = 4,
    SIX = 6,
    EIGTH = 8,
    TEN = 10,
    TWELVE = 12,
    FOURTEEN = 14,
    SIXTEEN = 16,
    EIGHTEEN = 18,
    TWENTY = 20,
  }

  /**
   * Generate Password Error
   * @ignore
   */
  export class GenPasswordError {
    /**
     * Construcotr
     * @param message { string }
     * @param code { number }
     * @ignore
     */
    constructor(message: string, code: number);
  }

  /**
   * Generate Password Function
   * @param type { TypeEnum }
   * @param dimension { DimensioinEnum }
   * @ignore
   */
  export async function GenPassword(type: TypeEnum, dimension: DimensionEnum): Promise<string>;
}
