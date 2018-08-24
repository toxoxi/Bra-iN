import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import SignInView from '@/views/SignInView'
import ListView from '@/views/ListView'
import NoteView from '@/views/NoteView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/signin',
      name: 'SignInView',
      component: SignInView
    },
    {
      path: '/list/:uid',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/note/:id',
      name: 'NoteView',
      component: NoteView
    }
  ]
})
