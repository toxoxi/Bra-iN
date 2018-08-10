<template>
  <section>
    <b-field label="Tags">
      <b-taginput
        v-model="tags"
        :data="filteredTags"
        autocomplete
        :allow-new="true"
        field="user.first_name"
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
  props: {
    data: Array
  },
  data() {
    return {
      filteredTags: this.data,
      isSelectOnly: false,
      tags: []
    }
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = this.data.filter(option =>
        option.toLowerCase().indexOf(text.toLowerCase)
      )
    }
  }
}
</script>
