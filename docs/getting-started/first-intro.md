# Quick start

?> This will give you idea of how using `Noun & Verb` feels like. For detailed
example, check out [`tutorial`](getting-started/tutorial.md).

## Installation

Create and move to a directory where you'd like to create an API
```
mkdir my-api
cd my-api
```

```
# initialize an npm module
npm init -y

# setup git, so we can track changes in small steps
echo node_modules > .gitignore
echo .env >> .gitignore
git init

# install the `prisma` & `noun-and-verb` as dependencies
npm install prisma tufan-io/noun-and-verb --save-dev

# initialize 
npx prisma init --datasource-provider sqlite

# commit these changes, so we can incrementally showcase `noun & verb` capabilities
git add .
git commit -m "empty schema"

```

At this point, you have an empty prisma schema in `prisma/schema.prisma`.

To speed things along, `noun-and-verb` comes with a simple example schema for a shopping cart.
We'll introduce `noun-and-verb` capabilities in three steps. 



### 0. Install a basic prisma schema

```
# copy a vanilla prisma schema 
cp node_modules/noun-and-verb/examples/0.prisma prisma/schema.prisma

# inspect the DB schema we'll be working with (c to exit)
git diff prisma/schema.prisma

# Run  a vanilla prisma generation
npx prisma generate

# inspect the changes made by `prisma generate`:
git status
git diff

```

Finally, commit these changes

```
git add .
git commit -m "vanilla prisma model"
```

### 1. Controlling visibility of model fields in the API

```
# copy a first set of annotations into our schema
cp node_modules/noun-and-verb/examples/1.prisma prisma/schema.prisma

# Adds the first annotations, to control model fields in the API.
# Introducing our first annotations: `@createOnly`, `@readOnly` & `@writeOnly`.
# These are fairly self-explanatory, and you can learn more at 
# https://tufan-io.github.io/noun-and-verb/#/guides/annotations

# See the changes (c to exit)
git diff

# Let's stage these changes, in preparation for the next step
git add .
```

We'll now see the power of `noun & verb`. With just these annotations, we can create a 
full functioning API! 

```
npx prisma generate

# This takes a few seconds to complete, but generates a set of files, 
# especially interesting for now are the ones in `src/nouns`
```

You can in fact run this API!
```
npm run dev
```


Once you are done inspecting the files,

```
git add .
git commit -m "adding @readOnly, @createOnly & @writeOnly annotations"
```

### 2. 

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
