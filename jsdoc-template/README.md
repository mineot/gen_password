Generate Password API

## Install

```
npm i @mineot/gen_password
```

## Use

```javascript
import { GenPassword, TypeEnum, DimensionEnum, GenPasswordError } from "@mineot/gen_password";

try {
  const password = await GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.FOUR);
  console.log(password);
} catch (err) {
  // err is instanceof GenPasswordError
  console.error(err);
}

GenPassword(TypeEnum.ONLY_NUMBERS, DimensionEnum.FOUR)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // err instanceof GenPasswordError
    console.error(err);
  });
```

## Type Enum

| Types         | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| ONLY_NUMBERS  | The password will only contain numbers                               |
| ONLY_ALPHAS   | The password will only contain characters                            |
| ALPHA_NUMERIC | The password will contain characters and numbers                     |
| COMPLEX       | The password will contain characters, numbers and this special chars |

## Dimension Enum

| Dimensions   | Description                      |
| ------------ | -------------------------------- |
| FOUR         | The max password size will be 04 |
| SIX          | The max password size will be 06 |
| EIGTH        | The max password size will be 08 |
| TEN          | The max password size will be 10 |
| TWELVE       | The max password size will be 12 |
| FOURTEEN     | The max password size will be 14 |
| SIXTEEN      | The max password size will be 16 |
| EIGHTEENTEEN | The max password size will be 18 |
| TWENTY       | The max password size will be 20 |

## Exception

| Message             | Code | Instance         |
| ------------------- | ---- | ---------------- |
| Invalid Type        | 400  | GenPasswordError |
| Invalid Dimension   | 400  | GenPasswordError |
