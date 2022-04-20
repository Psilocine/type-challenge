/*
  545 - printf
  -------
  by null (@Bestmain-YS) #hard #template-literal
  
  ### Question
  
  Implement `Format<T extends string>` generic.
  
  For example,
  
  ```ts
  type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
  type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
  type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
  type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
  ```
  
  > View on GitHub: https://tsch.js.org/545
*/

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Format<"abc">, string>>,
  Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
  Expect<Equal<Format<"abc%s">, (s1: string) => string>>,
  Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>
];

/* _____________ Original Code Here _____________ */

// type Format<T extends string> = any;

/* _____________ Your Code Here _____________ */

type Format<T extends string> = T extends `${any}%${infer R}`
  ? R extends `${infer L}${infer Rest}`
    ? L extends "s" | "d"
      ? L extends "s"
        ? (x: string) => Format<Rest>
        : L extends "d"
          ? (x: number) => Format<Rest>
          : never
      : Format<Rest>
    : R extends "s" | "d"
      ? R extends "s"
        ? (x: string) => string
        : R extends "d"
          ? (x: number) => string
          : never
      : string
  : string;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/545/answer
  > View solutions: https://tsch.js.org/545/solutions
  > More Challenges: https://tsch.js.org
*/
