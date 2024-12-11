<script setup lang="ts">
import { provide, ref } from 'vue';
import MyChild from './components/MyChild.vue';

const count = ref('count')
provide('count', count)

setTimeout(() => {
  count.value = 'not count'
}, 1000)
</script>

<template>
  <div>
    <MyChild />
  </div>
</template>