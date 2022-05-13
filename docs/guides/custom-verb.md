# Custom Verb

## Create GraphQL Spec

?> You might want to look into `src/nouns/*.sdl` to find input type you want

Add `.sdl` file in `src` directory. For example,
`src/verbs/createUserWithCart.sdl`.

```graphql
extend type Mutation {
  CreateUserWithCart (
    data: UserCreateWithoutCartInput!,
  ): User!,
}
```

## Run Generator

?> Boilerplate code for resolver function will be generated with
`npx prisma generate`

Run `npm run todo` to find out which file you need to fill in.

## Implement resolver

?> All `GraphQL` spec and resolver function files will be picked up from
`src/schema.ts`

!> You should manually import return type if needed. In this case, `User` from
`@prisma/client`

```typescript
import { Context, Resolvers } from "./utils";

// resolver functions

export async function CreateUserWithCart(
  parent: any,
  args: any,
  context: Context,
  info: any,
): Promise<User> {
  const { prisma } = context;
  // TODO: Implement resolver 'CreateUserWithCart'
  // [Prisma Transactions](https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide)
  return undefined as unknown as User;
}

// resolver type exports

const Mutation = {
  CreateUserWithCart,
};

export const resolvers: Resolvers = {
  Mutation,
};
```
