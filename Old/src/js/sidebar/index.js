/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

import { getEle } from '../utils/dom'

const sidebar = window => {
  // 侧边栏自适应宽度
  getEle('.sidebar-visible').style.width = `calc(${getEle('.wrapper-sidebar').clientWidth}px - ${getComputedStyle(getEle('.sidebar-visible')).getPropertyValue('--bs-gutter-x')})`
}

export default sidebar(window)
