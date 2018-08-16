<template>
  <div>
    <b-field v-if="isEditMode">
      <b-input
        :value="value"
        @input="updateTitle"
        @blur="isEditMode=false">
      </b-input>
    </b-field>
    <b-field v-else>
      <button
        @click="isEditMode=true"
        class="button is-large">
        {{ value }}
      </button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'NoteTitle',
  props: ['value'], // str: title
  data() {
    return {
      isEditMode: false
    }
  },
  methods: {
    updateTitle(val) {
      this.$emit('input', val)
    }
  }
}
</script>
