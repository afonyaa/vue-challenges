<script setup>
import { ref } from 'vue';
const colors = ["blue", "yellow", "red", "green"]

const theme = ref("red")

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)

</script>

<template>
  <p :style="{color: theme}">{{ theme }}</p>
</template>

<style scoped>
p {
  color: v-bind(theme)
}
</style>
