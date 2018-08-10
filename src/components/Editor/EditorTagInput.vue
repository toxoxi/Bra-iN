<!--<template>
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <b-field label="Find or add a Fruit">
      <b-autocomplete
        v-model="name"
        ref="autocomplete"
        :data="filteredDataArray"
        placeholder="e.g. Dog"
        @select="option => selected = option">
        <template slot="header">
          <a @click="showAddFruit">
            <span> Add new... </span>
          </a> 
        </template>
        <template slot="empty">No results for {{ tagName }}</template>
      </b-autocomplete>
    </b-field>
  </section>
</template> -->


<template>
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <b-field>
      <b-tag
        rounded
        closable>
        Colored closable tag label
      </b-tag>
      <b-autocomplete
        v-model="tagName"
        @select="option => selected = option"
        @keyup.enter="addTag"
        :data="filteredTags"
        ref="autocomplete"
        size="is-small"
        placeholder="Add tag...">
        <template slot="header">
          <a @click="showAddFruit">
            <span> Add new... </span>
          </a> 
        </template>
        <template slot="empty">No results for {{ tagName }}</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'EditorTagInput',
  props: {
    tagsHistory: Array
  },
  data() {
    return {
      tagName: '',
      selected: null
    }
  },
  computed: {
    filteredTags() {
      return this.tagsHistory.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.tagName.toLowerCase()) >= 0
        )
      })
    },
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    }
  },
  methods: {
    showAddFruit() {
      this.$dialog.prompt({
        message: `Fruit`,
        inputAttrs: {
          placeholder: 'e.g. Watermelon',
          maxlength: 20,
          value: this.name
        },
        confirmText: 'Add',
        onConfirm: value => {
          this.data.push(value)
          this.$refs.autocomplete.setSelected(value)
        }
      })
    },
    addTag() {
      console.log(this.tagName)
    }
  }
}
</script>
