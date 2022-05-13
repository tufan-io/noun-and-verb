# Troubleshooting

## Initialization Error

- `PrismaClientInitializationError: Invalid "prisma.[model].[operation]()" invocation`

It because your `Prisma` schema is not synchronized with database schema.

Try running `npx prisma db push` or `npx prisma migrate dev`before running
`npx prisma db seed`.

## Request Timed Out

- `PrismaClientKnownRequestError:  Invalid "prisma.[model].[operation]()" invocation`
- `Timed out fetching a new connection from the connection pool.`

It's because there're too many connections being opened to the database.

Try changing `concurrency` value in `src/__tests__/fixtures/seeder/index.ts`.

See also
[Connection Pool](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/connection-pool#connection-pool-timeout).
