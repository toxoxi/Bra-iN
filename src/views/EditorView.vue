<template>
  <div>
    <editor-tag-input :data="note.tags"></editor-tag-input>
    <markdown-editor :content="content"></markdown-editor>
  </div>
</template>

<script>
import EditorTagInput from '@/components/Editor/EditorTagInput'
import MarkdownEditor from '@/components/MarkdownEditor'
import Notes from '@/modules/Notes'

export default {
  name: 'EditorView',
  components: {
    EditorTagInput,
    MarkdownEditor
  },
  data() {
    return {
      content: '',
      note: {
        id: 1,
        tags: []
      }
    }
  },
  async created() {
    const tagData = await Notes.getTags(this.note.id)
    console.log(tagData)
    this.note.tags = tagData
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
