<script setup lang="ts">
import { onMounted } from 'vue'
import createCursor from 'icursor'

onMounted(() => {
  createCursor({ '.base-btn': 'base-btn-hover' })
})
</script>

<template>
  <header p="4" flex justify-between items-center>
    <h1>
      <img src="/iCursor.svg" alt="">
    </h1>
    <a href="https://github.com/yuusheng/icursor" i-mdi-github h6 w6 />
  </header>
  <div hfull rounded-10 border-gray border-solid pt10 border-t-3>
    <div h25 flex align-center justify-center>
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
  </div>
</template>

<style scoped>
button {
  height: 2rem;
}
.cursor .base-btn-hover {
  background-color: red;
}
</style>
