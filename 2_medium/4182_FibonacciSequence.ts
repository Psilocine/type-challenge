/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium 
  
  ### Question
  
  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).
  
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  
  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```
  
  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

/* _____________ Original Code Here _____________ */

// type Fibonacci<T extends number> = any;

/* _____________ Your Code Here _____________ */

type Fibonacci<
  T extends number,
  X extends number[] = [],
  Y extends number[] = [0],
  P extends number[] = []
> = T extends P["length"]
  ? X["length"]
  : Fibonacci<T, Y, [...X, ...Y], [0, ...P]>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
