/**
 * 检验某个节点是否存在某个类名
 * @param element 节点对象
 * @param clazz class 类名
 * @returns {boolean}
 */
export const hasClass = (element, clazz) => {
  if (!element || !clazz) return false
  if (clazz.indexOf(' ') !== -1) throw new Error('clazz 参数不得有空格！')
  if (element.classList) {
    return element.classList.contains(clazz)
  } else {
    return (' ' + element.className + ' ').indexOf(' ' + clazz + ' ') > -1
  }
}

/**
 * 节点新增类名
 * @param element 节点对象
 * @param clazz 类名
 */
export const addClass = (element, clazz) => {
  if (!element) return
  let curClass = element.className
  const classes = (clazz || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (element.classList) {
      element.classList.add(clsName)
    } else if (!hasClass(element, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!element.classList) {
    element.className = curClass
  }
}

/**
 * 移除节点某个类名
 * @param element 节点对象
 * @param clazz 类名
 */
export const removeClass = (element, clazz) => {
  if (!element || !clazz) return
  const classes = clazz.split(' ')
  let curClass = ' ' + element.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (element.classList) {
      element.classList.remove(clsName)
    } else if (hasClass(element, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!element.classList) {
    element.className = curClass.trim()
  }
}

/**
 * 根据类名获取 element 对象
 * @param clazz 类名
 * @returns Element
 */
export const getEle = clazz => {
  return document.querySelector(clazz)
}
