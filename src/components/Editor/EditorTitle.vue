<template>
  <section>
    <b-field>
      <b-input v-model="title" />
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'EditorTitle',
  data() {
    return {
      title: ''
    }
  }
}
</script>
