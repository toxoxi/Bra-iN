<template>
  <div>
    <new-note-button :tagHistory="user.tagHistory"/>
    <div v-for="(cards, index) in arrangeList" :key=index class="columns">
      <div
        v-for="card in cards"
        :key="card.id"
        class="column">
        <list-card
          @onEdit="onEdit(card.id)"
          :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import NewNoteButton from '@/components/common/NewNote/NewNoteButton'
import ListCard from '@/components/List/ListCard'
import Users from '@/modules/Users'
import Notes from '@/modules/Notes'

export default {
  name: 'ListView',
  components: {
    NewNoteButton,
    ListCard
  },
  data() {
    return {
      user: {
        uid: '',
        name: 'yorori',
        tagHistory: []
      },
      cards: [],
      sliceNum: 3
    }
  },
  async created() {
    this.user.uid = this.$route.params.uid

    const notes = await Notes.getUserNotes(this.user.uid)
    this.cards = notes.map(note => ({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags
    }))

    this.user.tagHistory = await Users.getTagHistory(this.user.uid)
  },
  methods: {
    onEdit(id) {
      this.$router.push({ path: `/note/${id}` })
    }
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
