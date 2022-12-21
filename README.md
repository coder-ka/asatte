# asatte

Asatte(Day after tomorrow in Japanese) is immutable date manipulation library for minimalist.

There is no syntax (e.g. "d" "y").

## Motivation

I love [Fecha](https://github.com/taylorhakes/fecha).

Fecha is the best date library ever for me but no manipulation provided.

Yes, you can do that with JavaScript `Date` Object.

```js
const today = new Date();
const dayAfterTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2, today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds());
```

With asatte

```js
import { addD } from "asatte";

const today = new Date();
const dayAfterTomorrow = addD(2, today);
```

Which do you like?

# Installation

```bash
npm i asatte
```

# Functions

You can understand what function to use with these signatures.

addX:

- `addY(years: number, date: Date): Date`
- `addMo(months: number, date: Date): Date`
- `addD(dates: number, date: Date): Date`
- `addH(hours: number, date: Date): Date`
- `addMi(minutes: number, date: Date): Date`
- `addS(seconds: number, date: Date): Date`
- `addMS(milliseconds: number, date: Date): Date`

setX:

- `setY(years: number, date: Date): Date`
- `setMo(months: number, date: Date): Date`
- `setD(dates: number, date: Date): Date`
- `setH(hours: number, date: Date): Date`
- `setMi(minutes: number, date: Date): Date`
- `setS(seconds: number, date: Date): Date`
- `setMS(milliseconds: number, date: Date): Date`

And every function is curried!
