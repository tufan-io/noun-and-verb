# Custom Mocker

?>This is useful when you **can't find one you need** in the
[List of supported faker properties](data/supported-faker).

## Independent / Dependent Mocker

?> All built-in mockers are **independent**, and custom mockers are
**dependent**

**Independent mockers can not use data of other fields, but dependent mocker
can.** For example, this is useful if you have `firstName`, `lastName` and
`fullName` field. `fullName` should be computed from `firstName` and `lastName`
field.

## Add mocker to Schema

?> Built-in mockers use **'faker' perfix**, and custom mockers use **'mock'
prefix**

```prisma
/// @mock faker.name.firstName
firstName String
/// @mock faker.name.lastName
lastName String
/// @mock mocker.fullName
fullName String
```

## Run Generator

?> Boilerplate code for custom mocker function will be generated with
`npx prisma generate`

Run `npm run todo` to find out which file you need to fill in.

## Implement mocker

```ts
// src/__tests__/fixtures/seeder/mocker/${modelName}/${fullName}.ts

import * as Faker from "faker";
import { Independent } from "./${model}Generator";

export default async function (
  faker: Faker.FakerStatic,
  fields?: Independent,
  args?: string,
) {
  // TODO: implement mock data generator for '${model}.${name}'
  // The next line is what would have to be added by you, dear developer.
  return `${fields.firstname} ${fields.lastName}`;
}
```

## Note about using free API for custom mocker

There's many API to get data with free plan. One of them is
[`Unsplash`](https://unsplash.com/).

`faker.unsplash` is not from `faker.js` but built in `Noun & Verb`.

```prisma
/// @mock faker.unsplash lights
image     String
```

But since`Unsplash`'s free plan has low rate limits, we create caching wrapper
to make it work. This may be the case with other APIs.

You can see the implementation in
`src/__tests__/fixtures/seeder/mocker/_builtIns.ts`
