<template>
  <b-taginput
    v-model="tags"
    :data="filteredTags"
    autocomplete
    :allow-new="true"
    icon="label"
    placeholder="Add a tag..."
    @typing="getFilteredTags">
  </b-taginput>
</template>

<script>
export default {
  name: 'TagInput',
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

<style>
.dropdown-content {
  position: fixed;
}
</style>
