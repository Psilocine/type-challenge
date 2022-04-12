/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.
  
  For example
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
  
  > View on GitHub: https://tsch.js.org/89
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, "a">>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, "a">>,
  Expect<
    Equal<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      "a" | "c" | "d"
    >
  >,
  Expect<Equal<RequiredKeys<{}>, never>>
];

/* _____________ Original Code Here _____________ */

// type RequiredKeys<T> = any;

/* _____________ Your Code Here _____________ */

// type RequiredKeys<T> = keyof {
//   [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
// };

type RequiredKeys<T> = keyof {
  [K in keyof T as Omit<T, K> extends T ? never : K]: T[K]
}
// Omit<T, K> extends T 为 true 说明 K 为必选属性

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/89/answer
  > View solutions: https://tsch.js.org/89/solutions
  > More Challenges: https://tsch.js.org
*/
