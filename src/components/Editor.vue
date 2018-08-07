<template>
  <div id="main">
    <mavon-editor v-model="value" language="en" :toolbars="toolbars" />
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

export default {
  name: 'Editor',
  data() {
    return {
      value: ''
    }
  }
}
</script>
