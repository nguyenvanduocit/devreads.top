# top news for developer

> A Vue.js project to list 5 news from the popular technology websites.

# Development

This project uses PWA technology. That mean the website still work event you lost the internet. PWA require `HTTPS`. And it only work when you build the project(`npm run build`). Because if apply service work on development will will be hard to handle caching.

## API Server

This project is just the front-end part. You need a server to crawl news and response to front-end. The API service was built with Golang, I will public it soon.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
