# Mock function determination

Mock function is determined by the following **priorities:**

1. `@mock`
2. _if_ `enum`
   - _if_ `@default` _exist_
     - Use default value
   - _else_
     - Use custom mock function

3. `Scalar Faker Mappings`

## Scalar Faker Mappings

### Direct Mapping

This includes `Prisma Scalar` (`String`, `Int`, `Float`, `Boolean`, `DateTime`).

| Scalar          | Faker                          |
| --------------- | ------------------------------ |
| Int             | faker.datatype.number          |
| Float           | faker.datatype.float           |
| Boolean         | faker.datatype.boolean         |
| String          | faker.datatype.string          |
| Alpha           | faker.random.alpha             |
| Alphanumeric    | faker.random.alphaNumeric      |
| Ascii           | faker.random.alpha             |
| BtcAddress      | faker.finance.bitcoinAddress   |
| CreditCard      | faker.finance.creditCardNumber |
| Currency        | faker.finance.amount           |
| DataURI         | faker.image.dataUri            |
| Date            | faker.date.past                |
| DateTime        | faker.datatype.datetime        |
| Email           | faker.internet.email           |
| EthereumAddress | faker.finance.ethereumAddress  |
| FQDN            | faker.internet.domainName      |
| Hexadecimal     | faker.datatype.hexaDecimal     |
| IBAN            | faker.finance.iban             |
| IP              | faker.internet.ip              |
| IPv4            | faker.internet.ip              |
| IPv6            | faker.internet.ipv6            |
| JSON            | faker.datatype.json            |
| Locale          | faker.random.locale            |
| MACAddress      | faker.internet.mac             |
| MimeType        | faker.system.mimeType          |
| MobilePhone     | faker.phone.phoneNumber        |
| Numeric         | faker.datatype.number          |
| Port            | faker.internet.port            |
| PostalCode      | faker.address.zipCode          |
| SemVer          | faker.system.semver            |
| Slug            | faker.lorem.slug               |
| StrongPassword  | faker.internet.password        |
| URL             | faker.internet.url             |
| UUID            | faker.datatype.uuid            |

### Indirect Mapping

These scalars are mapped to pre-built mock generators in `Noun & Verb` using
`faker.js`.

- Empty
- HashMd4
- HashMd5
- HashSha1
- HashSha256
- HashSha384
- HashSha512
- HexColor
- HSL
- LatLong
- Lowercase
- Octal
- RgbColor
- Uppercase

### No Mapping

These scalars does not have a pre-built mock generator, so we'll create a custom
mock function stub that the user can fill in.

- Base32
- Base58
- Base64
- BIC
- ByteLength
- EAN
- FullWidth
- HalfWidth
- HashRipemd128
- HashRipemd160
- HashTiger128
- HashTiger160
- HashTiger192
- HashCrc32
- HashCrc32b
- IPRange
- ISBN
- ISIN
- ISO8601
- ISO31661Alpha2
- ISO31661Alpha3
- ISRC
- ISSN
- JWT
- Length
- MongoId
- Multibyte
- PassportNumber
- RFC3339
- SurrogatePair
- VariableWidth
- VAT
