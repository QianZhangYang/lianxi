// import App from './app.vue'
// import Vue from 'vue'
import { tab } from './tabs'
tab()
import warp from './warp'
warp()
import './style/tabs.less'
import './style/warp.css'
const img = document.createElement('img')
const img2 = document.createElement('img')
import gifsrc from './assets/1.gif'
import pngsrc from './assets/logo_small.png'
img.src = gifsrc
img2.src = pngsrc
document.body.append(img)
document.body.append(img2)
import './assets/fonts/iconfont.css'

class zhangqiang {
  static a = 10
}
console.log(zhangqiang.a)
// new Vue({
//   render: (h) => h(App),
// }).$mount('#app')
import './app.vue'
