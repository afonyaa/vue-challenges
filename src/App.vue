<script setup>
import { ref, watch, watchEffect } from "vue"

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
*/

const VFocus = {
  updated: (el) => {
    el.focus()
  }
}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
    <input v-focus="state" type="text">
</template>