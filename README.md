# @fatcherjs/middleware-exception

<div align="center">
  <a href="https://codecov.io/github/fatcherjs/middleware-exception" > 
    <img src="https://codecov.io/github/fatcherjs/middleware-exception/graph/badge.svg?token=X6W3TO6BE1"/> 
 </a>
  <a href="https://www.jsdelivr.com/package/npm/@fatcherjs/middleware-exception">
    <img src="https://data.jsdelivr.com/v1/package/npm/@fatcherjs/middleware-exception/badge?style=rounded" alt="jsDelivr">
  </a>
  <a href="https://packagephobia.com/result?p=@fatcherjs/middleware-exception">
    <img src="https://packagephobia.com/badge?p=@fatcherjs/middleware-exception" alt="install size">
  </a>
  <a href="https://unpkg.com/@fatcherjs/middleware-exception">
    <img src="https://img.badgesize.io/https://unpkg.com/@fatcherjs/middleware-exception" alt="Size">
  </a>
  <a href="https://npmjs.com/package/@fatcherjs/middleware-exception">
    <img src="https://img.shields.io/npm/v/@fatcherjs/middleware-exception.svg" alt="npm package">
  </a>
  <a href="https://github.com/fatcherjs/middleware-exception/actions/workflows/ci.yml">
    <img src="https://github.com/fatcherjs/middleware-exception/actions/workflows/ci.yml/badge.svg?branch=master" alt="build status">
  </a>
</div>

## Install

### NPM

```bash
>$ npm install @fatcherjs/middleware-exception
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@fatcherjs/middleware-exception/dist/index.min.js"></script>
```

## Usage

In the fetch api, all requests are considered successful. However, we generally consider a request with a response code of `200-299` to be successful.

```ts
import { exception, fatcher, isFatcherError } from 'fatcher';

fatcher('https://foo.bar', { middlewares: [exception] }).catch(error => {
  if (isFatcherError(error)) {
    // handle fatcher error
    return;
  }

  // handle other error
});
```

## License

[MIT](https://github.com/fatcherjs/middleware-exception/blob/master/LICENSE)
