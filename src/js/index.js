import smoothScroll from 'smoothscroll-polyfill'

import tooltips from './bootstrap/tooltips'
import prism from './bootstrap/prism'
import toTop from './bootstrap/to-top'
import progress from './bootstrap/post-progress'
import toc from './bootstrap/post-toc'
import search from './bootstrap/search'
import pjax from './bootstrap/pjax'

// ele.scrollIntoView 兼容
// Safari 无效需要引入 polyfill
smoothScroll.polyfill()

tooltips()
prism()
toTop()
progress()
toc()
search()
pjax()
