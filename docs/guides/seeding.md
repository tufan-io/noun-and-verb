# Seeding

!> You should add `@seed` to schema before running `npx prisma generate`.

Since relational databases cannot be guaranteed to be directed-acyclic-graphs,
we use the [`@seed`](guides/annotations?id=seed) annotation on models, to define
which models to use as roots of the seeding tree for mock data.

The `@seed` implementation means that for **many-to-many** relations, mock data
is generated as **one-to-many**. One should provide `@seed` annotations to
trigger mock data generation in both directions.

?> **See how data flows from `@seed` in sketch below**

## Unidirectional Seed

```prisma
/// @seed
model User {
  id        String   @id @default(cuid())
  cart      Cart?
}

model Cart {
  id        String    @id @default(cuid())
  user      User      @relation(fields: [userId], references: [id])
  userId    String    @unique
  items     Product[]
}

model Product {
  id        String   @id @default(cuid())
  carts     Cart[]
}
```

![shopping](../image/seed/shopping.svg)

## Bidirectional Seed

```prisma
/// @seed
model Post {
  id         Int        @id @default(autoincrement())
  categories Category[]
}

/// @seed
model Category {
  id    Int    @id @default(autoincrement())
  posts Post[]
}
```

![many-to-many](../image/seed/many-to-many.svg)
