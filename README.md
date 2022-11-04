<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">boilerplate-next-clean-architecture</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mesainc/boilerplate-next-clean-architecture.svg)](https://github.com/mesainc/boilerplate-next-clean-architecture/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mesainc/boilerplate-next-clean-architecture.svg)](https://github.com/mesainc/boilerplate-next-clean-architecture/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This boilerplate provides a set of extra configurations to start a Next.Js project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Tests](#tests)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

It includes:

- Next
- Typescript
- Tailwind
- Miragejs
- Jest + testing library
- Eslint e Prettier
- Husky
- Plop
- Zustand

## 🏁 Getting Started <a name = "getting_started"></a>

How to use this boilerplate:

```
npx create-next-app@latest -e https://github.com/mesainc/boilerplate-next-clean-architecture --use-npm
# or
yarn create next-app -e https://github.com/mesainc/boilerplate-next-clean-architecture
# or
pnpm create next-app -e https://github.com/mesainc/boilerplate-next-clean-architecture --use-pnpm
```

After run one of the commands above, you will see a new folder called `boilerplate-next` in your current directory.

```
cd boilerplate-next

# here you should run using the corresponding package manager
npm run development
```

## 🎈 Usage <a name="usage"></a>

### Scripts

```
  # start the server
    "dev": "next dev",
  # build for production
    "build": "next build",
  # start the server for production
    "start": "next start",
  # fix linting
    "lint": "next lint",
  # generate component.tsx, scss module and test file
    "generate": "plop --plopfile ./generators/plopfile.js",
  # runs unit test in watch mode
    "test:unit": "jest --watch",
  # run on pre-commit routine
    "test": "jest --passWithNoTests",
  # run on pre-commit routine
    "prepare": "husky install"
```

## ✍️ Authors <a name = "authors"></a>

- [@renan-prado](https://github.com/renan-prado)
- [@christiantld](https://github.com/christiantld)
