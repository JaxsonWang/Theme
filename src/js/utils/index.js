/*
 * Copyright (c) 2020. Jaxson All Rights Reserved.
 * 归作者所有，如有问题请联系作者。
 */

/**
 * 异步载入脚本
 * @param scripts 脚本数组对象
 * @returns {Promise<Object[]>}
 */
export const loadScripts = (scripts) => {
  function get(src) {
    return new Promise(function(resolve, reject) {
      if (document.getElementById(src.id) !== null) {
        resolve(src)
        return false
      }
      const el = document.createElement('script')
      el.id = src.id
      el.addEventListener('load', function() {
        resolve(src)
      }, false)
      el.addEventListener('error', function() {
        reject(src)
      }, false)
      el.src = src.url;
      (document.getElementsByTagName('body')[0] || document.getElementsByTagName('head')[0]).appendChild(el)
    })
  }

  const myPromises = scripts.map(function(script) {
    return get(script)
  })

  return Promise.all(myPromises)
}

/**
 * 异步载入样式脚本
 * @param scripts 脚本数组对象
 * @returns {Promise<Object[]>}
 */
export const loadStyles = (scripts) => {
  function get(src) {
    return new Promise(function(resolve, reject) {
      if (document.getElementById(src.id) !== null) {
        resolve(src)
        return false
      }
      const el = document.createElement('link')
      el.type = 'text/css'
      el.rel = 'stylesheet'
      el.id = src.id
      el.addEventListener('load', function() {
        resolve(src)
      }, false)
      el.addEventListener('error', function() {
        reject(src)
      }, false)
      el.href = src.url
      document.getElementsByTagName('head')[0].appendChild(el)
    })
  }

  const myPromises = scripts.map(function(script) {
    return get(script)
  })

  return Promise.all(myPromises)
}
