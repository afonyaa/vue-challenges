<script setup>
import { ref, watchEffect, onUnmounted, onMounted } from 'vue';

function useLocalStorage(key, initialValue) {
  const count = ref(Number(localStorage.getItem(key)) || initialValue)

  watchEffect(() => {
    localStorage.setItem(key, count.value)
  })

  return count
}

const counter = useLocalStorage("counter", 0)

// We can get the localStorage by triggering the getter:
console.log(counter.value)

// And we also can set the localStorage by triggering the setter:

counter.value+=1

console.log(counter.value)


</script>

<template>

</template>

<style scoped>

</style>
