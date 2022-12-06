<script setup lang="ts">
import { onMounted } from 'vue'
import { createCursor } from '@icursor/core'

onMounted(() => {
  createCursor({ '.base-btn': 'base-btn-hover' })
})
</script>

<template>
  <button class="base-btn">
    button 1
  </button>
  <button class="base-btn">
    button 2
  </button>
  <button base-btn>
    button 3
  </button>
  <button base-btn>
    button
  </button>
</template>

<style scoped>
.cursor .base-btn-hover {
  background-color: red;
}
</style>
