/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard 
  
  ### Question
  
  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
  
  **Leap year is not considered**
  
  Good Luck!
  
  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/9155
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<ValidDate<"0102">, true>>,
  Expect<Equal<ValidDate<"0131">, true>>,
  Expect<Equal<ValidDate<"1231">, true>>,
  Expect<Equal<ValidDate<"0229">, false>>,
  Expect<Equal<ValidDate<"0100">, false>>,
  Expect<Equal<ValidDate<"0132">, false>>,
  Expect<Equal<ValidDate<"1301">, false>>
];

/* _____________ Original Code Here _____________ */

// type ValidDate<T extends string> = any;

/* _____________ Your Code Here _____________ */

type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Whole = Num | 0;
type Day31 = "01" | "03" | "05" | "07" | "08" | "10" | "12";
type Day30 = "04" | "06" | "09" | "11";

type ValidMonth<Month> = Month extends `0${Num}` | "10" | "11" | "12"
  ? true
  : false;

type ValidDay<Month extends string, Day extends string> = Month extends Day31
  ? Day extends `0${Num}` | `1${Whole}` | `2${Whole}` | "30" | "31"
    ? true
    : false
  : Month extends Day30
  ? Day extends `0${Num}` | `1${Whole}` | `2${Whole}` | "30"
    ? true
    : false
  : Day extends `0${Num}` | `1${Whole}` | `2${Exclude<Whole, 9>}`
  ? true
  : false;

type ValidDate<T extends string> =
  `${T}` extends `${infer M1}${infer M2}${infer D1}${infer D2}`
    ? ValidMonth<`${M1}${M2}`> extends true
      ? ValidDay<`${M1}${M2}`, `${D1}${D2}`> extends true
        ? true
        : false
      : false
    : false;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/
