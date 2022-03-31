/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Implement the type version of ```Array.shift```
  
  For example
  
  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```
  
  > View on GitHub: https://tsch.js.org/3062
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];

/* _____________ Original Code Here _____________ */

// type Shift<T> = any;

/* _____________ Your Code Here _____________ */

type Shift<T extends unknown[] = []> = T extends [any, ...infer R] ? R : [];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3062/answer
  > View solutions: https://tsch.js.org/3062/solutions
  > More Challenges: https://tsch.js.org
*/
