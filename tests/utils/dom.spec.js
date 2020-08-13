/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

import { getEle, hasClass } from '@utils/dom'

test('hasClass', () => {
  document.body.innerHTML = `<div class="site-wrapper container d-flex"></div>`
  expect(hasClass(getEle('.site-wrapper'), 'container')).toBe(true)
  expect(hasClass(getEle('.site-wrapper'), 'app-wrapper')).toBe(false)
})
