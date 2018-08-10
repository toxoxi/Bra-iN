import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import NoteListView from '@/views/NoteListView'
import EditorView from '@/views/EditorView'

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
      path: '/note',
      name: 'NoteListView',
      component: NoteListView
    },
    {
      path: '/edit',
      name: 'EditorView',
      component: EditorView
    }
  ]
})
