/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
];

/* _____________ Original Code Here _____________ */

// type Diff<O, O1> = any;

/* _____________ Your Code Here _____________ */

type Diff<
  O extends Record<string, unknown>,
  O1 extends Record<string, unknown>
> = {
  [T in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: T extends keyof O
    ? O[T]
    : T extends keyof O1
    ? O1[T]
    : never;
};

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
