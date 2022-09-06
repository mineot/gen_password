# GenPassword

Generate Passwords, fast and easy!

## Instalation

```
npm i @mineot/gen_password
```

## Use

```javascript
import { GenPassword, Types, Dimensions, GenPasswordError } from "@mineot/gen_password";

try {
  const password = await GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR);
  console.log(password);
} catch(err) { // err instanceof GenPasswordError
  console.error(err);
}

GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { // err instanceof GenPasswordError
    console.error(err);
  });
```

## References

| Types         | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| ONLY_NUMBERS  | The password will only contain numbers                               |
| ONLY_ALPHAS   | The password will only contain characters                            |
| ALPHA_NUMERIC | The password will contain characters and numbers                     |
| COMPLEX       | The password will contain characters, numbers and this special chars |

| Dimensions   | Description                            |
| ------------ | -------------------------------------- |
| FOUR         | The max password size will be 4  |
| SIX          | The max password size will be 6  |
| EIGTH        | The max password size will be 8  |
| TEN          | The max password size will be 10 |
| TWELVE       | The max password size will be 12 |
| FOURTEEN     | The max password size will be 14 |
| SIXTEEN      | The max password size will be 16 |
| EIGHTEENTEEN | The max password size will be 18 |
| TWENTY       | The max password size will be 20 |

## Exceptions

| Message             | Code | Instance         |
| ------------------- | ---- | ---------------- |
| Invalid Type        | 400  | GenPasswordError |
| Invalid Dimension   | 400  | GenPasswordError |
| Type Not Found      | 404  | GenPasswordError |
| Dimension Not Found | 404  | GenPasswordError |

## License

[MIT License](./LICENSE)

## Donate

Help me with this project, I will be grateful a lot!

| Platform          | Address                                    |
| ----------------- | ------------------------------------------ |
| Bitcoin           | bc1q02u42ky4y2u8apd9vuhglmgmsh2402w24exnwx |
| Pix (Only Brazil) | 74d3034f-22f8-46c6-91a8-8e2eaecf0225       |
