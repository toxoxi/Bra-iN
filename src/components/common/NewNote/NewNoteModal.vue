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
        <b-field label="Tags">
          <app-tag-input
            :tags="tags"
            :tagHistory="tagHistory"/>
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
import AppTagInput from '@/components/common/AppTagInput'

export default {
  name: 'NewNoteModal',
  components: {
    AppTagInput
  },
  props: {
    tagHistory: Array
  },
  data() {
    return {
      title: '',
      tags: []
    }
  },
  methods: {
    onSubmit() {
      this.$emit('createNote', this.title, this.tags)
    }
  }
}
</script>
