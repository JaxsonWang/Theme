/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

import staticFile from '../static'
import { loadScripts } from '../utils'

const loadColorClover = window => {
  console.log('我执行了相关函数', window)
}

const dynamicColorCover = window => {
  loadScripts([{
    id: 'color-thief',
    url: staticFile.colorthief
  }]).then(() => {
    loadColorClover(window)
  })
}

export default dynamicColorCover(window)
