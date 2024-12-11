<script setup>
import { onMounted, inject, onUnmounted } from "vue"

const timer = inject('timer')
const count = inject('count')


onMounted(() => {
  console.log(timer)
  // The timer will work abnormally when the child component is toggled. Lets fix it.
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
    window.clearInterval(timer.value)
})


</script>

<template>
    <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

<style scoped>

</style>
