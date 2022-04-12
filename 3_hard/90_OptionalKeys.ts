/*
  90 - Optional Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.
  
  > View on GitHub: https://tsch.js.org/90
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, "b">>,
  Expect<
    Equal<
      OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      "b" | "c" | "d"
    >
  >,
  Expect<Equal<OptionalKeys<{}>, never>>
];

/* _____________ Original Code Here _____________ */

// type OptionalKeys<T> = any;

/* _____________ Your Code Here _____________ */

// type OptionalKeys<T> = keyof {
//   [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
// };

type OptionalKeys<T> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/90/answer
  > View solutions: https://tsch.js.org/90/solutions
  > More Challenges: https://tsch.js.org
*/