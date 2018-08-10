<template>
  <div>
    <editor-tag-input :tagsHistory="tagsHistory"></editor-tag-input>
    <div>hi</div>
    <markdown-editor></markdown-editor>
  </div>
</template>

<script>
import EditorTagInput from '@/components/Editor/EditorTagInput'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  name: 'EditorView',
  components: {
    EditorTagInput,
    MarkdownEditor
  },
  data() {
    return {
      tagsHistory: [
        'Vue',
        'React',
        'Angular',
        'webpack',
        'ES2016',
        'async/await'
      ]
    }
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
