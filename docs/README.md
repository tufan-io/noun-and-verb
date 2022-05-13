> Help us improve the documentation. 
> If you find and error, have a question or just a suggestion, 
> please open an issue [here](https://github.com/tufan-io/noun-and-verb) to let us know.


# `Noun & Verb`

`Noun & Verb` is
[`Prisma generator`](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
which **generates most of the boilerplate code** to build `GrahpQL API Server`.

It helps developers to **think at a higher level**, objects(`Nouns`) and
interactions between them(`Verbs`).

# Features

?> All theses features are enabled by **adding**
[8 annotations](guides/annotations.md) on `Prisma Schema`.

- It does **not own** the code.
- It generates code **without sacrificing any of the flexibility** enabled by
  the underlying tools.
- There aren't any `Noun & Verb` **specific** code in the output.

**There are 3 things we currently generate:**

## Generate GraphQL API

- Out of box
  - **Fully functioning** CRUD `GraphQL API` using `Prisma`
  - Wide range of `GraphQL Scalars` via
    [`validator.js`](https://github.com/validatorjs/validator.js)
- Extensible
  - **Generate boilerplate code** for custom `GraphQL` operations
  - Support for custom scalars

## Generate Test Cases

- **Fully functioning**, 100% test coverage
- All CRUD `GraphQL` operations are tested against **actual database**

## Generate Seeders

- Entire database can be seeded **without writing seed scripts manually**
- Out of box support for [`faker.js`](https://github.com/Marak/Faker.js) for
  field level mock data
- Support for custom mock functions

?> You might want to check out our [Philosophy](/philosophy.md),
[Technical Explanation](/technical-explanation.md), and [FAQ](/faq.md).
