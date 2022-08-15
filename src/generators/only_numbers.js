import { Dimensions } from "@/models/dimensions";

const values = {
  [Dimensions.FOUR]: { min: 1000, max: 9999 },
  [Dimensions.SIX]: { min: 100000, max: 999999 },
  [Dimensions.EIGTH]: { min: 10000000, max: 99999999 },
  [Dimensions.TEN]: { min: 1000000000, max: 9999999999 },
  [Dimensions.TWELVE]: { min: 100000000000, max: 999999999999 },
  [Dimensions.FOURTEEN]: { min: 10000000000000, max: 99999999999999 },
};

values[Dimensions.SIXTEEN] = { min: values[Dimensions.FOURTEEN].min * 100, max: values[Dimensions.FOURTEEN].max * 100 };
values[Dimensions.EIGHTEENTEEN] = { min: values[Dimensions.SIXTEEN].min * 100, max: values[Dimensions.SIXTEEN].max * 100 };
values[Dimensions.TWENTY] = { min: values[Dimensions.EIGHTEENTEEN].min * 100, max: values[Dimensions.EIGHTEENTEEN].max * 100 };

const calc = ({ min, max }) => parseInt(Math.random() * (max - min) + min).toFixed(0);

export default async (dimension) => calc(values[dimension]);
