<script setup>
import { ref, watch, watchEffect } from "vue"

/**
  * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/

const VDebounceClick = {
  created(el, binding) {
    let timeout

    el.addEventListener('click', 
      () => {
        clearTimeout(timeout)  
        timeout = setTimeout(() => {
        binding.value()
      }, binding.arg)
      }
    )

  }
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>