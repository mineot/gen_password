// @ts-check

import { DimensionEnum } from "@enums/dimension.enum";
import { TypeDimension } from "@core/type-dimension";
import { TypeEnum } from "@enums/type.enums";

const typeKeys = Object.values(TypeEnum);
const dimensionKeys = Object.values(DimensionEnum).map(el => el.toString());

test("Core Type Dimension - Validate Key's", () => {
  Object.keys(TypeDimension).forEach(typeKey => {
    expect(typeKeys.includes(typeKey)).toEqual(true);

    Object.keys(TypeDimension[typeKey]).forEach(dimensionKey => {
      expect(dimensionKeys.includes(dimensionKey)).toEqual(true);
    });
  });
});
