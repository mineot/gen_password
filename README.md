# gen_password

The Password Generator

## Instalation

- `npm i @mineot/gen_password`

## Use

Params References:

Is mandatory inform the type and dimension, see below what they mean

- The `type` determines with which the password will be built, follow the list of available options:
  - numeric_only
  - alpha_only
  - alpha_numeric
  - complex
- The `dimension` is the size that the password will be exactly, for that, enter a number within the available ones below:
  - 4
  - 6
  - 8
  - 12 

Code example:

```
import gen_password from "@mineot/gen_password";

const password = gen_password(type, dimension);
console.log(password);
```

## License

[MIT License](./LICENSE)
