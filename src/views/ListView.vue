<template>
  <div>
    <list-card
      v-for="card in cards"
      :key="card.id"
      :card="card"/>
  </div>
</template>

<script>
import ListCard from '@/components/List/ListCard'
import Notes from '@/modules/Notes'

export default {
  name: 'ListView',
  components: {
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
