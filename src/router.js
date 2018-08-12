import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import NoteListView from '@/views/NoteListView'
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
      path: '/list',
      name: 'NoteListView',
      component: NoteListView
    },
    {
      path: '/note',
      name: 'NoteView',
      component: NoteView
    }
  ]
})
