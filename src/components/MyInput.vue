<script setup>
import { defineModel} from "vue"

const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

console.log(modifiers)

</script>

<template>
    <input v-model="model" />
</template>