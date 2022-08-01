# let-me-down

[![Version](https://img.shields.io/npm/v/let-me-down.svg)](https://www.npmjs.org/package/let-me-down)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm download][download-image]][download-url]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[download-image]: https://img.shields.io/npm/dm/let-me-down.svg?style=flat-square
[download-url]: https://npmjs.org/package/let-me-down

`LetMeDown` is a React component to always keep Footer component of your application at bottom of screen and below the content on page.

<img src="./public/example.gif" width="500" height="250" />

## Maintainers

[Shivam Pawar](https://github.com/shivam-pawar) Active maintainer - accepting PRs and doing minor testing, fixing issues or doing active development.

## Installation

```sh
npm install let-me-down
```

## Prerequisite

```
"react": ">=16.8"
"react-dom": ">=16.8"
```
## Usage

1 . Import let-me-down after installation

```js
import LetMeDown from 'let-me-down';
```

2 . Add property footerComponent= {<Your_Footer_Component />} to LetMeDown component.

```jsx
<LetMeDown footerComponent={<Footer />}>
    <Content />
</LetMeDown>
```

### Standalone

You can import `node_modules/let-me-down/dist/index.js` into your page. Please make sure that you have already imported `react` and `react-dom` into your page.

## Author

**Shivam Pawar**

- 👨‍🎓 [Profile](https://github.com/shivam-pawar "Shivam Pawar")

- 📧 [Email](mailto:shivampawar1038@gmail.com)

- 🌐 [Website](https://shivam-pawar.vercel.app/ "Welcome")

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/shivampawar" title="Buy me a Coffee"><img src="https://kingtechnologies.in/assets/images/Coffee.png" alt="Buy me a Coffee"/></a>
