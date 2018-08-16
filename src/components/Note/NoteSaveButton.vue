<template>
  <button @click="$emit('saveNote')" class="button is-success">
    <span class="icon is-small">
      <i class="fas fa-check"></i>
    </span>
    <span>Save</span>
  </button>
</template>
