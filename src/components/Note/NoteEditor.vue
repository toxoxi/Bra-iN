<template>
  <div id="main">
    <mavon-editor
      @save="$emit('saveContent')"
      @change="updateContent"
      :value="value"
      :toolbars="toolbars"
      language="en" />
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

export default {
  name: 'NoteEditor',
  props: ['value'],
  methods: {
    updateContent(val) {
      this.$emit('input', val)
    }
  },
  data() {
    return {
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
