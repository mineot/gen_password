import { Dimensions } from "@/helpers/enums";

const four = { min: 1000, max: 9999 };
const six = { min: 100000, max: 999999 };
const eigth = { min: 10000000, max: 99999999 };
const ten = { min: 1000000000, max: 9999999999 };
const twelve = { min: 100000000000, max: 999999999999 };
const fourteen = { min: 10000000000000, max: 99999999999999 };
const sixteen = { min: fourteen.min * 100, max: fourteen.max * 100 };
const eighteenteen = { min: sixteen.min * 100, max: sixteen.max * 100 };
const twenty = { min: eighteenteen.min * 100, max: eighteenteen.max * 100 };

function calculate(x) {
  return parseInt(Math.random() * (x.max - x.min) + x.min).toFixed(0);
}

export default async function (dimension) {
  switch (dimension) {
    case Dimensions.FOUR:
      return calculate(four);
    case Dimensions.SIX:
      return calculate(six);
    case Dimensions.EIGTH:
      return calculate(eigth);
    case Dimensions.TEN:
      return calculate(ten);
    case Dimensions.TWELVE:
      return calculate(twelve);
    case Dimensions.FOURTEEN:
      return calculate(fourteen);
    case Dimensions.SIXTEEN:
      return calculate(sixteen);
    case Dimensions.EIGHTEENTEEN:
      return calculate(eighteenteen);
    case Dimensions.TWENTY:
      return calculate(twenty);
  }
  return null;
}
