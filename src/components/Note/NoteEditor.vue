<template>
  <div id="main">
    <mavon-editor v-model="text" language="en" :toolbars="toolbars" />
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

export default {
  name: 'NoteEditor',
  props: {
    content: String
  },
  data() {
    return {
      text: this.content,
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        help: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true,
        // false
        undo: false,
        redo: false,
        fullscreen: false,
        readmodel: false,
        htmlcode: false,
        trash: false,
        save: false,
        navigation: false
      }
    }
  }
}
</script>
