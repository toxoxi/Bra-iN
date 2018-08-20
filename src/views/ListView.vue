<template>
  <div>
    <new-note-button />
    <div v-for="(cards, index) in arrangeList" :key=index class="columns">
      <div
        v-for="card in cards"
        :key="card.id"
        class="column">
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
      cards: [],
      sliceNum: 3
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
  },
  computed: {
    arrangeList: function() {
      // 配列をsliceNum毎の二次元配列に変換
      const list = []
      this.cards.forEach((card, index) => {
        if (index % this.sliceNum === 0) {
          list.push([])
        }
        list[list.length - 1].push(card)
      })
      return list
    }
  }
}
</script>
