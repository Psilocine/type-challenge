/*
  300 - String to Number
  -------
  by Pig Fang (@g-plane) #hard #template-literal
  
  ### Question
  
  Convert a string literal to a number, which behaves like `Number.parseInt`.
  
  > View on GitHub: https://tsch.js.org/300
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ToNumber<"0">, 0>>,
  Expect<Equal<ToNumber<"5">, 5>>,
  Expect<Equal<ToNumber<"12">, 12>>,
  Expect<Equal<ToNumber<"27">, 27>>
];

/* _____________ Original Code Here _____________ */

// type ToNumber<S extends string> = any;

/* _____________ Your Code Here _____________ */

type ToNumber<
  S extends string,
  R extends number[] = []
> = `${R["length"]}` extends S ? R["length"] : ToNumber<S, [...R, 0]>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/300/answer
  > View solutions: https://tsch.js.org/300/solutions
  > More Challenges: https://tsch.js.org
*/
