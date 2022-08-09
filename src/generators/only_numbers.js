import { Dimensions } from "@/helpers/enumerators";
import { Calculate } from "@/helpers/calcs";

const four = { min: 1000, max: 9999 };
const six = { min: 100000, max: 999999 };
const eigth = { min: 10000000, max: 99999999 };
const ten = { min: 1000000000, max: 9999999999 };
const twelve = { min: 100000000000, max: 999999999999 };
const fourteen = { min: 10000000000000, max: 99999999999999 };
const sixteen = { min: fourteen.min * 100, max: fourteen.max * 100 };
const eighteenteen = { min: sixteen.min * 100, max: sixteen.max * 100 };
const twenty = { min: eighteenteen.min * 100, max: eighteenteen.max * 100 };

export default async function (dimension) {
  switch (dimension) {
    case Dimensions.FOUR:
      return Calculate(four);
    case Dimensions.SIX:
      return Calculate(six);
    case Dimensions.EIGTH:
      return Calculate(eigth);
    case Dimensions.TEN:
      return Calculate(ten);
    case Dimensions.TWELVE:
      return Calculate(twelve);
    case Dimensions.FOURTEEN:
      return Calculate(fourteen);
    case Dimensions.SIXTEEN:
      return Calculate(sixteen);
    case Dimensions.EIGHTEENTEEN:
      return Calculate(eighteenteen);
    case Dimensions.TWENTY:
      return Calculate(twenty);
  }
  return null;
}
