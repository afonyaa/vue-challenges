<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from "vue"

const scope = effectScope()

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once

scope.run(() => {
  watch(doubled, () => console.log('watch',doubled.value))
  watchEffect(() => console.log('watch effect', doubled.value))
})

counter.value = 2

setTimeout(() => {
  scope.stop()
  counter.value = 4
})


</script>

<template>
   <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>