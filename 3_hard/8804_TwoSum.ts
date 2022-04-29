/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #hard #array #math
  
  ### Question
  
  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.
  
  > View on GitHub: https://tsch.js.org/8804
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>
];

/* _____________ Original Code Here _____________ */

// type TwoSum<T extends number[], U extends number> = any;

/* _____________ Your Code Here _____________ */

type TwoSum<T extends number[], U extends number, Set = never> = T['length'] extends 0
? false
: Sub<U, T[0]> extends Set
  ? true
  : TwoSum<Tail<T>, U, Set | T[0]>;

type Tail<T> = T extends [infer _, ...infer Rest] ? Rest : [];

type Sub<T extends number, U extends number> = ConstructTuple<T> extends [
  ...arr1: ConstructTuple<U>,
  ...arr2: infer Rest,
] ? Rest['length'] : -1;

type ConstructTuple<T extends number, Res extends number[] = []> = Res['length'] extends T
? Res
: ConstructTuple<T, [...Res, 1]>

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8804/answer
  > View solutions: https://tsch.js.org/8804/solutions
  > More Challenges: https://tsch.js.org
*/
