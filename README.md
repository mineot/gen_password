# GenPassword

Generate Passwords, fast and easy!

## Instalation

```
npm i @mineot/gen_password
```

## Use

```javascript
import { GenPassword, Types, Dimensions } from "@mineot/gen_password";

const password = await GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR);
console.log(password);

GenPassword(Types.ONLY_NUMBERS, Dimensions.FOUR)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
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
| FOUR         | The maximum password length will be 4  |
| SIX          | The maximum password length will be 6  |
| EIGTH        | The maximum password length will be 8  |
| TEN          | The maximum password length will be 10 |
| TWELVE       | The maximum password length will be 12 |
| FOURTEEN     | The maximum password length will be 14 |
| SIXTEEN      | The maximum password length will be 16 |
| EIGHTEENTEEN | The maximum password length will be 18 |
| TWENTY       | The maximum password length will be 20 |

## Exceptions

| Message             | Code | Instance OF      |
| ------------------- | ---- | ---------------- |
| type.invalid        | 400  | GenPasswordError |
| type.not.found      | 404  | GenPasswordError |
| dimension.invalid   | 400  | GenPasswordError |
| dimension.not.found | 404  | GenPasswordError |

## License

[MIT License](./LICENSE)

## Donate

If you wanna contribute with this project, feel free to [donates here](./donates/DONATES.md) the value that you desire, thanks a lot!
