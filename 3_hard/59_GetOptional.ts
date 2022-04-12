/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields
  
  For example
  
  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```
  
  > View on GitHub: https://tsch.js.org/59
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<
    Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>
  >
];

/* _____________ Original Code Here _____________ */

// type GetOptional<T> = any;

/* _____________ Your Code Here _____________ */

// Required
// type GetOptional<T> = {
//   [K in keyof T as T[K] extends Required<T>[K]? never: K]: T[K]
// };

// Pick
type GetOptional<T> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K]
}
// 当 K 是可选属性时，Pick<T, K> 是空对象

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/59/answer
  > View solutions: https://tsch.js.org/59/solutions
  > More Challenges: https://tsch.js.org
*/
