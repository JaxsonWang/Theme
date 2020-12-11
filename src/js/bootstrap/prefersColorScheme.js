const defaultTheme = {
  colorTextPrimary: '#24292e',
  backgroundColor: '#fff'
}

const darkTheme = {
  colorTextPrimary: '#fff',
  backgroundColor: '#000'
}

const darkSwitch = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.style.setProperty('--color-text-primary', darkTheme.colorTextPrimary)
    document.documentElement.style.setProperty('--background-color', darkTheme.backgroundColor)
    console.log('🎉 Dark mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
  } else {
    document.documentElement.style.setProperty('--color-text-primary', defaultTheme.colorTextPrimary)
    document.documentElement.style.setProperty('--background-color', defaultTheme.backgroundColor)
    console.log('🎉 Light mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
  }
}

export default () => {
  // 初始化
  darkSwitch()
  // 监听系统风格切换
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
      console.log('🎉 Dark mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
      //dark mode
    } else {
      //light mode
      console.log('🎉 Light mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
    }
  })
  // 设置主题
  const darkToggleDom = document.querySelector('.dark-click-action')
  let style = window.matchMedia('(prefers-color-scheme: dark)').matches
  darkToggleDom.onclick = () => {
    if (!style) {
      document.documentElement.style.setProperty('--color-text-primary', darkTheme.colorTextPrimary)
      document.documentElement.style.setProperty('--background-color', darkTheme.backgroundColor)
      style = true
      console.log('🎉 Dark mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
    } else {
      document.documentElement.style.setProperty('--color-text-primary', defaultTheme.colorTextPrimary)
      document.documentElement.style.setProperty('--background-color', defaultTheme.backgroundColor)
      console.log('🎉 Light mode is supported', getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary'))
      style = false
    }
  }
}
