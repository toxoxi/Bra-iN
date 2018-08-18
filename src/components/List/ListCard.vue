<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ card.title }}
      </p>
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
