import { getScrollTop } from '../utils'

export default () => {
  // 判断当前滚动高度
  setScrollTop()
  // 监听滚动事件
  window.addEventListener('scroll', () => {
    setScrollTop()
  })
  // 点击按钮回到顶部
  if (document.querySelector('#to-top') === null) return
  document.querySelector('#to-top').onclick = () => {
    document.body.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

function setScrollTop() {
  if (document.querySelector('#to-top') === null) return
  if (getScrollTop() >=50) {
    document.querySelector('#to-top').classList.remove('fade-out-down')
    document.querySelector('#to-top').classList.add('fade-in-right')
  } else {
    document.querySelector('#to-top').classList.add('fade-out-down')
    document.querySelector('#to-top').classList.remove('fade-in-right')
  }
}
