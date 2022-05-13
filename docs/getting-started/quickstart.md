# Quick start

?> This will give you idea of how using `Noun & Verb` feels like. For detailed
example, check out [`tutorial`](getting-started/tutorial.md).

## Installation

`Noun & Verb` can be installed from `npm`.

```
npm i -D noun-and-verb
```

After you install it, you need to add this to schema.

```prisma
generator noun_and_verb {
  provider = "noun_and_verb"
}
```

## Add Annotations

To see bigger example, see [tutorial](getting-started/tutorial.md). To learn
about **8 annotations**, see [Annotations Guide](guides/annotations.md).

```prisma
/// @seed
model User {
  /// @readOnly
  id      Int      @id @default(autoincrement())
  profile Profile?
}

model Profile {
  /// @readOnly
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int 
}
```

## Run Generator

```
npx prisma generate
```

This takes some time at first to install dependencies. but it is **much faster
after the first run.**

## Seed Database

When you run `npx prisma generate`, `Noun & Verb` **generates seed scripts**
alongside with API server and test cases.

You can run them by `npx prisma db seed`.

## Run Tests

```
npm run test
```

Check if all tests pass successfully with **100% coverage.**

You can also run `npm run dev`, go to `http://localhost:1234`, and play with it!

## Run Server

```
npm run build && npm run start
```

Now you have `GraphQL API` ready at `http://localhost:3456/graphql`!
