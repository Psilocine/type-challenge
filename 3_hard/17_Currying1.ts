/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array
  
  ### Question
  
  > TypeScript 4.0 is recommended in this challenge
  
  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 
  
  For example:
  
  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)
  
  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```
  
  The function passed to `Currying` may have multiple arguments, you need to correctly type it.
  
  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
  
  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];

/* _____________ Original Code Here _____________ */

// declare function Currying(fn: any): any;

/* _____________ Your Code Here _____________ */

type CurryingHelper<Args extends unknown[], R> = Args["length"] extends 0
  ? R
  : Args extends [infer F, ...infer Rest]
  ? (arg: F) => CurryingHelper<Rest, R>
  : never;

declare function Currying<Fn>(
  fn: Fn
): Fn extends (...args: infer Args) => infer R
  ? CurryingHelper<Args, R>
  : never;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/17/answer
  > View solutions: https://tsch.js.org/17/solutions
  > More Challenges: https://tsch.js.org
*/
