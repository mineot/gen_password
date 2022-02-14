# gen_password

Tool to generate passwords, easily

## Instalation

```
npm i @mineot/gen_password
```

## Use

Params References:

Is mandatory inform the `type` and `dimension`, see below what they mean:

- The `type` determines with which the password will be built, follow the list of available options:
  - `numeric_only`: generate a password with numbers only
  - `alpha_only`: generate a password with upper and lower letters only
  - `alpha_numeric`: generate a password with upper letters, lower letters and numbers
  - `complex`: generate a password with upper letters, lower letters, numbers and special chars
- The `dimension` is the size that the password will be exactly, for that, enter a number within the available ones below:
  - 4, 6, 8, 10, 12, 14, 16, 18 and 20

Code example:

```
import gen_password from "@mineot/gen_password";

const password = gen_password(type, dimension);
console.log(password);
```

## License

[MIT License](./LICENSE)

## Donate

If you wanna contribute with this project, feel free to donate the value that you desire, thanks a lot!

- Bitcoin: bc1q02u42ky4y2u8apd9vuhglmgmsh2402w24exnwx
- Pix (for brazilians): 74d3034f-22f8-46c6-91a8-8e2eaecf0225
