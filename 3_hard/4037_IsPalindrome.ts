/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #hard #string
  
  ### Question
  
  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.
  
  For example:
  
  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```
  
  > View on GitHub: https://tsch.js.org/4037
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";
import { ExpectFalse, NotEqual } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsPalindrome<"abc">, false>>,
  Expect<Equal<IsPalindrome<"b">, true>>,
  Expect<Equal<IsPalindrome<"abca">, false>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>
];

/* _____________ Original Code Here _____________ */

// type IsPalindrome<T> = any;

/* _____________ Your Code Here _____________ */

type IsPalindrome<T extends string | number> =
  `${T}` extends `${infer L}${infer NT}${infer R}`
    ? L extends R
      ? IsPalindrome<NT>
      : false
    : true;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4037/answer
  > View solutions: https://tsch.js.org/4037/solutions
  > More Challenges: https://tsch.js.org
*/
