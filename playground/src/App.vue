<script setup lang="ts">
import { onMounted } from 'vue'
import { createCursor } from 'icursor'

onMounted(() => {
  createCursor({ '.base-btn': 'base-btn-hover' })
})
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped>
div {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cursor .base-btn-hover {
  background-color: red;
}
</style>
