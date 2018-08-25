import Vue from 'vue'
import SignIn from '@/entry-point/signin/SignIn.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(SignIn)
}).$mount('#app-signin')
