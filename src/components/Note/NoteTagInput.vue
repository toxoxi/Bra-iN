<template>
  <section>
    <b-field label="Tags">
      <b-taginput
        v-model="tags"
        :data="filteredTags"
        autocomplete
        :allow-new="true"
        icon="label"
        placeholder="Add a tag..."
        @typing="getFilteredTags">
      </b-taginput>
    </b-field>
    <pre style="max-height: 400px"><b>Tags:</b>{{ tags }}</pre>
  </section>
</template>

<script>
export default {
  name: 'NoteTagInput',
  props: {
    tags: Array,
    tagHistory: Array
  },
  data() {
    return {
      filteredTags: this.tagHistory,
      isSelectOnly: false
    }
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = this.tagHistory.filter(
        option => option.toLowerCase().indexOf(text.toLowerCase()) >= 0
      )
    }
  }
}
</script>
