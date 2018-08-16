<template>
  <div>
    <note-title
      v-model="note.title" />
    <note-tag-input
      :tags="note.tags"
      :tagHistory="user.tagHistory" />
    <note-save-button
      @saveNote="saveNote" />
    <div>{{ this.note.content }}</div>
    <note-editor
      v-model="note.content"
      @saveNote="saveNote" />
  </div>
</template>

<script>
import NoteTitle from '@/components/Note/NoteTitle'
import NoteTagInput from '@/components/Note/NoteTagInput'
import NoteSaveButton from '@/components/Note/NoteSaveButton'
import NoteEditor from '@/components/Note/NoteEditor'
import Users from '@/modules/Users'
import Notes from '@/modules/Notes'

export default {
  name: 'NoteView',
  components: {
    NoteTitle,
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
        title: '',
        content: '',
        id: 'rDcqF8uaVAFfF4bbgJSj',
        tags: []
      }
    }
  },
  async created() {
    const noteId = this.note.id
    const [title, tags, content] = await Promise.all([
      Notes.getTitle(noteId),
      Notes.getTags(noteId),
      Notes.getContent(noteId)
    ])
    this.note.title = title
    this.note.tags = tags
    this.note.content = content

    const tagHistory = await Users.getTagHistory(this.user.name)
    this.user.tagHistory = tagHistory
  },
  methods: {
    async saveNote() {
      Notes.saveContent(this.note).catch(e => {
        window.alert(e)
        console.error(e)
      })
      await Users.saveTags(this.user.name, this.note.tags)

      /*
      TODO:
      tagHistoryの取得方法の変更
      無駄なクエリを減らしたいけど、saveTagsの返り値をtagHistoryにするのも微妙
      */
      this.user.tagHistory = await Users.getTagHistory(this.user.name)
    }
  }
}
</script>

<style scoped>
div > div {
  height: 150px;
}
</style>
