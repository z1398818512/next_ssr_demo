## CSS 写法

-内置写法：查看 <a href="https://www.npmjs.com/package/styled-jsx">styled-jsx documentation</a>

### 像以前项目中那样使用 Less

- 安装

  npm install --save @zeit/next-less less

  yarn add @zeit/next-less less

- 配置 next.config.js

  const withLess = require('@zeit/next-less')
  module.exports = withLess({
  cssModules: true
  })

-less 用法和以前基本一致

-参考<a href="https://github.com/zeit/next-plugins/tree/master/packages/next-less" target="_blank" rel="nofollow">@zeit/next-less</a>

## 静态文件

- 在根目录下新建文件夹叫 static。代码可以通过/static/来引入相关的静态资源。

## <head>

- 设置一个内置组件来装载<head>到页面中，定义 key 属性来避免重复的<head>标签，保证<head>只渲染一次

```bash
import Head from 'next/head'

export default () =>

  <div>

    <Head>

      <title>My page title</title>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

    </Head>

    <Head>

      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />

    </Head>

    <p>Hello world!</p>

  </div>
```
