/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
