<script setup>
import { watch, customRef } from "vue"

function useDebouncedRef(factory, delay) {
  let localValue = factory
  let timeout
  return customRef((track, trigger) => ({
    get() {
      track()
      return localValue
    },
    set(value) {
      localValue = value
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        trigger()
      }, delay)
    }
  }))
}
const text = useDebouncedRef("hello", 2000)

watch(text, (value) => {
  console.log(value)
})

</script>

<template>
    <input v-model="text" />
</template>