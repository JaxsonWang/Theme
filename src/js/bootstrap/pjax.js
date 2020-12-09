import tooltips from './tooltips'
import prism from './prism'
import toTop from './to-top'
import progress from './post-progress'
import toc from './post-toc'

import { loading } from '../images'

export default () => {
  const pjax = new Pjax({
    elements: 'a[href]:not([href^="#"])',
    debug: false,
    selectors: [
      'main.ha__main'
    ]
  })

  console.log(pjax)

  // 在Pjax请求开始后触发
  document.addEventListener('pjax:send', () => {
    // 禁止滚动
    document.body.classList.add('overflow-hidden')
    // 添加 loading
    const loadingEle = document.createElement('div')
    loadingEle.classList = 'ha__loading position-absolute d-flex flex-column justify-content-center align-items-center animated fade-in'
    loadingEle.innerHTML = `<img src="${loading()}" class="loading-image" alt="loading image"><div class="loading-text">正在加载数据中...</div>`
    document.body.appendChild(loadingEle)
  })

  // 在Pjax请求完成后触发，无论失败还是成功
  document.addEventListener('pjax:complete', () => {
    tooltips()
    prism()
    toTop()
    progress()
    toc()

    // 加载页面搜索界面打开的问题
    const searchDom = document.querySelector('.ha__search')
    if (searchDom !== null && !searchDom.classList.contains('d-none')) searchDom.classList.add('d-none')
    // 删除已存在的 tooltips 元素
    const tooltipsList = [].slice.call(document.querySelectorAll('.tooltip.show'))
    if (tooltipsList.length !== 0) tooltipsList.forEach(block => block.remove())
    // 修复移动端打开页面菜单打开的问题
    const mobileDom = document.querySelector('.navbar-toggler')
    if (!mobileDom.classList.contains('collapsed')) mobileDom.click()

    // 移除 loading 动画
    setTimeout(() => {
      document.querySelector('.ha__loading').classList.remove('fade-in')
      document.querySelector('.ha__loading').classList.add('fade-out')
      // 解锁滚动
      document.body.classList.remove('overflow-hidden')
    }, 1000)
    setTimeout(() => {
      document.querySelector('.ha__loading').remove()
    }, 1600)
  })

  // 在Pjax请求成功后触发
  document.addEventListener('pjax:success', () => {
  })

  // Pjax请求失败后触发
  document.addEventListener('pjax:error', () => {
  })
}
