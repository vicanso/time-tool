# Time-tool

[![Build Status](https://travis-ci.org/vicanso/time-tool.svg?style=flat-square)](https://travis-ci.org/vicanso/time-tool)
[![Coverage Status](https://img.shields.io/coveralls/vicanso/time-tool/master.svg?style=flat)](https://coveralls.io/r/vicanso/time-tool?branch=master)
[![npm](http://img.shields.io/npm/v/time-tool.svg?style=flat-square)](https://www.npmjs.org/package/time-tool)
[![Github Releases](https://img.shields.io/npm/dm/time-tool.svg?style=flat-square)](https://github.com/vicanso/influx-ql)

## API

### ns

Get ns string

```js
const timeTool = require('time-tool');
// 1480515243852052221
const ns = timeTool.ns();
```

### us

Get us string

```js
const timeTool = require('time-tool');
// 1480515243854926
const us = timeTool.us();
```

### minus

Minus timestamp, return integer

- `a` timestamp string

- `b` timestamp string


```js
const timeTool = require('time-tool');
// 400000001
timeTool.minus('1480513813865', '1480113813864')
```
