<script setup>
import { ref } from 'vue';

const counter = ref(0);

setInterval(() => {
  counter.value++
}, 1000)

</script>

<template>
  <button @click="counter++" v-once>
    Click: {{ counter }}
  </button>
</template>

<style scoped>

</style>
