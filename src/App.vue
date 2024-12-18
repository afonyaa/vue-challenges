<script setup>
import { ref, watch, watchEffect } from "vue"

const VOhModel = {
  mounted(el, binding) {
    el.value = binding.value
    el.addEventListener('input', (e) => {
      console.log('listen', e.target.value)
      value.value = e.target.value
    })
  }
}

const value = ref("Hello Vue.js")


</script>

<template>
  <input v-oh-model="value" type="text" />
  {{ value }}
</template>