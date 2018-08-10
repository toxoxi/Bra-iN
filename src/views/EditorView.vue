<template>
  <div>
    <editor-tag-input :data="tagData.tags"></editor-tag-input>
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
      tagData: {
        userId: 1,
        tags: ['Vue', 'React', 'Angular', 'webpack', 'ES2016', 'async/await']
      }
    }
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
