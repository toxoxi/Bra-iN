<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ card.title }}
      </p>
      <button @click="$emit('onEdit')" class="button">Edit</button>
    </header>
    <div class="card-content">
      <div class="content">
        {{ card.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    card: Object
  }
}
</script>
