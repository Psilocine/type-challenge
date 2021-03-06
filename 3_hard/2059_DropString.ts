/*
  2059 - Drop String
  -------
  by CaptainOfPhB (@CaptainOfPhB) #hard #template-literal #infer
  
  ### Question
  
  Drop the specified chars from a string.
  
  For example:
  
  ```ts
  type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
  ```
  
  > View on GitHub: https://tsch.js.org/2059
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<DropString<"butter fly!", "">, "butter fly!">>,
  Expect<Equal<DropString<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropString<"butter fly!", "but">, "er fly!">>,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
  >,
  Expect<Equal<DropString<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropString<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "but">, "     e r f l y ! ">
  >,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "tub">, "     e r f l y ! ">
  >,
  Expect<
    Equal<DropString<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
  >,
  Expect<Equal<DropString<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];

/* _____________ Original Code Here _____________ */

// type DropString<S, R> = any;

/* _____________ Your Code Here _____________ */

type StringToUnion<T extends string> = T extends `${infer L}${infer Rest}`
  ? L | StringToUnion<Rest>
  : T;

type DropString<
  S extends string,
  R extends string,
  Res extends string = ""
> = R extends ""
  ? S
  : S extends `${infer First}${infer End}`
  ? First extends StringToUnion<R>
    ? DropString<End, R, Res>
    : DropString<End, R, `${Res}${First}`>
  : Res;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2059/answer
  > View solutions: https://tsch.js.org/2059/solutions
  > More Challenges: https://tsch.js.org
*/
