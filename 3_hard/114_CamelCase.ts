/*
  114 - CamelCase
  -------
  by Anthony Fu (@antfu) #hard #template-literal
  
  ### Question
  
  Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.
  
  For example
  
  ```ts
  type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
  type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
  ```
  
  > View on GitHub: https://tsch.js.org/114
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CamelCase<"foobar">, "foobar">>,
  Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase<"">, "">>
];

/* _____________ Original Code Here _____________ */

// type CamelCase<S extends string> = any;

/* _____________ Your Code Here _____________ */

type CamelCase<
  S extends string,
  UPPER extends boolean = false,
  Res extends string = ""
> = S extends `${infer L}${infer R}`
  ? L extends "_"
    ? CamelCase<R, true, Res>
    : UPPER extends true
    ? CamelCase<R, false, `${Res}${Uppercase<L>}`>
    : CamelCase<R, false, `${Res}${Lowercase<L>}`>
  : Res;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/114/answer
  > View solutions: https://tsch.js.org/114/solutions
  > More Challenges: https://tsch.js.org
*/
