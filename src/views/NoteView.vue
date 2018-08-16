<template>
  <div>
    <note-tag-input
      :tags="note.tags"
      :tagHistory="user.tagHistory" />
    <note-save-button @saveContent="saveContent"></note-save-button>
    <div>{{ this.note.content }}</div>
    <note-editor
      v-model="note.content"
      @saveContent="saveContent" />
  </div>
</template>

<script>
import NoteTagInput from '@/components/Note/NoteTagInput'
import NoteSaveButton from '@/components/Note/NoteSaveButton'
import NoteEditor from '@/components/Note/NoteEditor'
import Users from '@/modules/Users'
import Notes from '@/modules/Notes'

export default {
  name: 'NoteView',
  components: {
    NoteTagInput,
    NoteSaveButton,
    NoteEditor
  },
  data() {
    return {
      user: {
        name: 'yorori',
        tagHistory: []
      },
      note: {
        content: '',
        id: 'rDcqF8uaVAFfF4bbgJSj',
        tags: []
      }
    }
  },
  async created() {
    const noteId = this.note.id
    const [tags, content] = await Promise.all([
      Notes.getTags(noteId),
      Notes.getContent(noteId)
    ])
    this.note.tags = tags
    this.note.content = content

    const tagHistory = await Users.getTagHistory(this.user.name)
    this.user.tagHistory = tagHistory
  },
  methods: {
    saveContent() {
      Notes.saveContent(this.note).catch(e => {
        window.alert(e)
        console.error(e)
      })
    }
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
