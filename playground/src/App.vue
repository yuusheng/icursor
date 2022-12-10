<script setup lang="ts">
import { onMounted } from 'vue'
import createCursor from 'icursor'

onMounted(() => {
  createCursor({ '.base-btn': 'base-btn-hover' })
})
</script>

<template>
  <div>
    <button class="base-btn">
      iCursor
    </button>
    <button class="base-btn">
      iCursor
    </button>
    <button base-btn>
      none
    </button>
    <button base-btn>
      none
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
