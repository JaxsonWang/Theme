/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

import { getEle, hasClass } from '../../src/js/utils/dom'

test('hasClass', () => {
  const result = hasClass(getEle('.site-wrapper'), 'container')
  expect(result).toBe(true)
})
