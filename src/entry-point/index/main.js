import Vue from 'vue'
import Index from '@/entry-point/index/Index.vue'
import router from '@/routing/router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app')
