# @adonisjs/prettier-config

<hr>
<br />

<div align="center">
  <h3>Base Prettier configuration</h3>
  <p>Base prettier rules used by the AdonisJS team for packages and the applications.</p>
</div>

<br />

<div align="center">

[![npm-image]][npm-url] [![license-image]][license-url]

</div>

## Installation

Install the package from the npm registry.

```sh
npm i -D @adonisjs/prettier-config

# Make sure also to install the following packages
npm i -D prettier
```

## Usage

After installation, you can copy/paste the following block of code within the `package.json` file.

```json
{
  "prettier": "@adonisjs/prettier-config"
}
```

Our base config also installs and configures the [prettier-plugin-edgejs](https://github.com/sajansharmanz/prettier-plugin-edgejs) package to format Edge templates using Prettier.

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/Julien-R44">Julien Ripouteau</a> and <a href="https://github.com/thetutlage">Harminder Virk</a>
</div>

[npm-image]: https://img.shields.io/npm/v/@adonisjs/prettier-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@adonisjs/prettier-config/v/latest 'npm'
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/adonisjs/prettier-config?style=for-the-badge
