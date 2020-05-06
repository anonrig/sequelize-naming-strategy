# Sequelize Naming Strategy for TypeORM

[![greenkeeper: enabled](https://badges.greenkeeper.io/relevantfruit/sequelize-naming-strategy.svg)](https://greenkeeper.io/)
[![build: status](https://travis-ci.org/relevantfruit/sequelize-naming-strategy.svg?branch=master)](https://travis-ci.org/relevantfruit/sequelize-naming-strategy)
[![codecov: percent](https://codecov.io/gh/relevantfruit/sequelize-naming-strategy/branch/master/graph/badge.svg)](https://codecov.io/gh/relevantfruit/sequelize-naming-strategy)
[![commitizen: friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![docs: gh-pages](https://img.shields.io/badge/docs-gh--pages-blue.svg)](https://relevantfruit.github.io/sequelize-naming-strategy/)
[![npm (scoped)](https://img.shields.io/npm/v/sequelize-naming-strategy?label=npm%20package)](https://www.npmjs.com/package/sequelize-naming-strategy)

## Quick Start

Install package using `npm i --save sequelize-naming-strategy`

```typescript
import { createConnection } from 'typeorm';
import { SequelizeNamingStrategy } from 'sequelize-naming-strategy'

await createConnection({
  ...
  namingStrategy: new SequelizeNamingStrategy()
});
```
