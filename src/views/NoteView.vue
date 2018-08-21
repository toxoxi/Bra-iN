<template>
  <div>
    <note-title
      v-model="note.title" />
    <app-tag-input
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
import NoteSaveButton from '@/components/Note/NoteSaveButton'
import NoteEditor from '@/components/Note/NoteEditor'
import AppTagInput from '@/components/common/AppTagInput'
import Users from '@/modules/Users'
import Notes from '@/modules/Notes'

export default {
  name: 'NoteView',
  components: {
    NoteTitle,
    NoteSaveButton,
    NoteEditor,
    AppTagInput
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
    this.note.id = this.$route.params.id

    const noteData = await Notes.getNote(this.note.id)
    this.note.title = noteData.title
    this.note.content = noteData.content
    this.note.tags = noteData.tags

    this.user.tagHistory = await Users.getTagHistory(this.user.name)
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

      this.$toast.open({
        message: 'Saved!',
        type: 'is-success'
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
