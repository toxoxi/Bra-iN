<template>
  <div>
    <button @click="isComponentModalActive=true" class="button">
      <b-icon pack="fas" icon="edit" />
    </button>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <new-note-modal
        :tagHistory="tagHistory"
        @createNote="createNote"/>
    </b-modal>
  </div>
</template>

<script>
import NewNoteModal from '@/components/common/NewNote/NewNoteModal'
import Notes from '@/modules/Notes'

export default {
  name: 'NewNoteButton',
  components: {
    NewNoteModal
  },
  props: {
    tagHistory: Array
  },
  data() {
    return {
      isComponentModalActive: false
    }
  },
  methods: {
    createNote(title, tags) {
      const data = {
        title,
        tags,
        user: {
          name: 'yorori'
        }
      }
      Notes.createNote(data)
      this.$router.push({ path: 'note' })
    }
  }
}
</script>
