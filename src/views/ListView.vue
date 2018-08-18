<template>
  <div>
    <new-note-button />
    <div class="columns">
      <div
        v-for="card in cards"
        :key="card.id"
        class="column is-4">
        <list-card
          :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import NewNoteButton from '@/components/common/NewNoteButton'
import ListCard from '@/components/List/ListCard'
import Notes from '@/modules/Notes'

export default {
  name: 'ListView',
  components: {
    NewNoteButton,
    ListCard
  },
  data() {
    return {
      cards: []
    }
  },
  async created() {
    const notes = await Notes.getUserNotes('yorori')
    this.cards = notes.map(note => ({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags
    }))
  }
}
</script>
