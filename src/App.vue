<script setup lang="ts">
import { ref, computed } from "vue"

const count = ref(1)
const plusOne = computed(
  {
    get: () => count.value + 1,
    set: () => {
      count.value++
    }
  }
)

plusOne.value = plusOne.value + 1

</script>

<template>
  <div>
    {{ plusOne }}
  </div>
</template>