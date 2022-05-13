# Integration

?> `Noun & Verb` has all the integrations that `Prisma` offers, but it also has
all the limitations.

- For `Prisma`'s database support, you should read
  [Supported databases](https://www.prisma.io/docs/reference/database-reference/supported-databases)
  and
  [Database features matrix](https://www.prisma.io/docs/reference/database-reference/database-features).

- If you are using [DBaaS](https://www.ibm.com/cloud/learn/dbaas), you should
  check if they have **integration guide** with `Prisma`.

- [Troubleshooting](guides/troubleshooting.md) might be helpful.

Since we are in very **early stage**, there is a possibility that a problem may
occur in some database or service. If we notice that, it will be documented
here. **If you are experiencing something that is not documented here,
[please open an issue](https://github.com/tufan-io/noun-and-verb-docs).**

## Known Issues

### PostgreSQL

#### Seeding

List of scalar variables is possible in `PostgreSQL`

```prisma
/// @mock faker.name.firstname
names      String[]
```

But above will always generate list with 1 element.

If you want multiple elements in the list, you need to write
[custom mocker](guides/custom-mocker.md) for now.
