<template>
  <div>
    <note-tag-input
      :tags="note.tags"
      :tagHistory="user.tagHistory" />
    <note-editor :content="content" />
  </div>
</template>

<script>
import NoteTagInput from '@/components/Note/NoteTagInput'
import NoteEditor from '@/components/Note/NoteEditor'
import Users from '@/modules/Users'
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
      user: {
        name: 'yorori',
        tagHistory: []
      },
      note: {
        id: 'rDcqF8uaVAFfF4bbgJSj',
        tags: []
      }
    }
  },
  async created() {
    const tagData = await Notes.getTags(this.note.id)
    this.note.tags = tagData

    const tagHistory = await Users.getTagHistory(this.user.name)
    this.user.tagHistory = tagHistory
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
