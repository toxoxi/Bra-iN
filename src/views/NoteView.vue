<template>
  <div>
    <note-tag-input :data="note.tags"></note-tag-input>
    <note-editor :content="content"></note-editor>
  </div>
</template>

<script>
import NoteTagInput from '@/components/Note/NoteTagInput'
import NoteEditor from '@/components/Note/NoteEditor'
import Notes from '@/modules/Notes'

export default {
  name: 'NoteView',
  components: {
    NoteTagInput,
    NoteEditor
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
