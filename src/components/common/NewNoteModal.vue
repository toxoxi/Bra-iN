<template>
  <form @submit.prevent="onSubmit">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Create New Note</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input
            v-model="title"
            type="text"
            placeholder="New Note Title"
            required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary">Create</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewNoteModal',
  data() {
    return {
      title: '',
      tags: ['smartphone', 'OnePlus']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('createNote', this.title, this.tags)
    }
  }
}
</script>
