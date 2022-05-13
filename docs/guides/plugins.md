# Envelop Plugins

We currently use [`envelop`](https://github.com/dotansimha/envelop) for `@oneOf`
support.

## @oneOf

```typescript
// @prisma/client
export type CartCreateArgs = {
  select?: CartSelect | null;
  include?: CartInclude | null;
  data: XOR<CartCreateInput, CartUncheckedCreateInput>;
};
```

```graphql
input CartCreateInput @oneOf {
  nested: CartNestedCreateInput,
  relational: CartUnnestedCreateInput,
}
```

```typescript
const getEnveloped = envelop({
  plugins: [
    useExtendedValidation({
      rules: [OneOfInputObjectsRule],
    }),
    useSchema(schema),
  ],
});
```

## Using Other Plugins

?> You can add [plugins](https://www.envelop.dev/plugins) easily by modifying
`getEnveloped` in `src/server.ts`

For example, it you want to add authentication in your API,
[you can use `@envelop/auth0` plugin](https://www.envelop.dev/docs/guides/adding-authentication-with-auth0).

```typescript
const getEnveloped = envelop({
  plugins: [
    ...,
    useAuth0({
      domain: 'TODO',
      audience: 'TODO',
      extendContextField: 'auth0',
    }),
  ],
});
```
