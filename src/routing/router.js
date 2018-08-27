import Vue from 'vue'
import Router from 'vue-router'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import IndexView from '@/views/IndexView'
import ListView from '@/views/ListView'
import NoteView from '@/views/NoteView'
import NotFoundView from '@/views/NotFoundView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/list',
      name: 'ListView',
      component: ListView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/note/:id',
      name: 'NoteView',
      component: NoteView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFountView',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requireAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        // fullPathから 最初の '/' を取り除く
        const fromPath = from.fullPath.split('/')
        fromPath.shift()
        // index('/')から飛ぶ場合は明示的に'index'を代入
        const fromView = fromPath[0] === '' ? 'index' : fromPath[0]

        next(false) // next(false) でルーターのフックを解決する
        location.replace(`/signin?p=${fromView}`)
      }
    })
  } else {
    next()
  }
})

export default router
