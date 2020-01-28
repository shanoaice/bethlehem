# bethlehem

[![Github Actions Status](https://github.com/KsRyY/bethlehem/workflows/CI/badge.svg)](https://github.com/KsRyY/bethlehem/actions) ![Github Pages Status](https://github.com/KsRyY/bethlehem/workflows/Github%20Pages/badge.svg) [![codecov](https://codecov.io/gh/KsRyY/bethlehem/graph/badge.svg)](https://codecov.io/gh/KsRyY/bethlehem)

Bethlehem is a minimal functional programming library for JavaScript. It is inspired by [Ramda](https://github.com/ramda/ramda) but has some significant differences.

## Usage

First, install bethlehem (tips: because there are known problems before v1.3.0, it is better to set your minimum version of bethlehem to 1.3.0):

```bash
yarn add bethlehem@^1.3.0
# or npm
npm i bethlehem@^1.3.0
```

Then, cherry-pick the function(s) you want:

```js
import { compose, add } from 'bethlehem'
// you can use cjs if you don't want tree-shaking
const { compose, add } = require('bethlehem')
```

Or import everything:

```js
import * as B from 'bethlehem'
// you can use cjs if you don't want tree-shaking
const B = require('bethlehem')
```

Because bethlehem specified ESM build file in the `module` field of `package.json`, your module bundler will do tree-shaking for you.

If you want to use bethlehem without any bundler with your browser, you can use the UMD build. Add a script tag to your HTML file:

```html
<script src="https://unpkg.com/bethlehem/dist/b.umd.production.js"></script>
```

And you can access everything in the `B` global variable.

## [Documentation](https://ksryy.github.io/bethlehem)

## Development

Before running any command, install all the dependencies using `yarn install` or `npm install`.

```bash
yarn watch
# or npm
npm run watch
```

This will run [ava](http://ava.li) in watch mode. Test suite will be rerun if there's any change in `src` or in the test file.

```bash
yarn test
# or npm
npm run test
```

This will run [ava](http://ava.li) in verbose mode. All test suites will be ran and their titles will be displayed in the output.

```bash
yarn build
# or npm
npm run build
```

This will build all source code and put them in the `dist` folder. Declarations will be also built.

```bash
yarn build:docs
# or npm
npm run build:docs
```

This will build the documents into the `docs` folder using TypeDoc.
