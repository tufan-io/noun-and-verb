# Technical Explanation

`Noun & Verb` builds upon battle tested open-source modules, and outside the
annotations in the prisma schema, does not introduce any code artifacts. It
builds upon leading battle-tested libraries in the open source and wires them
together.

## Prisma

Used for `GraphQL` resolver.

## Apollo Server + Micro

Current default. Might support others in future.

## [Envelop](https://www.envelop.dev)

For `@oneOf`. You can apply [other plugins](guides/plugins.md).

## Validator

For `GraphQL` scalar.

## Faker

To creating mock data.

## Leasot

Todo