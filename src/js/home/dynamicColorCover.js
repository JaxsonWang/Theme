/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

import staticFile from '../static'
import { loadScripts } from '../utils'

const loadColorClover = window => {
  const document = window.document
  const colorThief = new ColorThief()
  document.querySelectorAll('.post-area').forEach(block => {
    const color = colorThief.getPalette(block.querySelector('img'), 2)
    // block.style.backgroundImage = `-webkit-gradient(linear, left top, right bottom, from(rgb(${color[0].join(', ')})), to(rgb(${color[1].join(', ')})))`
    // block.style.backgroundImage = `linear-gradient(to bottom right, rgb(${color[0].join(', ')}), rgb(${color[1].join(', ')}))`
  })
}

const dynamicColorCover = window => {
  // loadScripts([{
  //   id: 'color-thief',
  //   url: staticFile.colorthief
  // }]).then(() => {
  //   loadColorClover(window)
  // })
}

export default dynamicColorCover(window)
