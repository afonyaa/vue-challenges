<script setup>
import { reactive, isReactive, toRaw, markRaw  } from "vue"

const state = markRaw({ count: 1 })
const reactiveState = reactive(state)

/**
 * Modify the code so that we can make the output be true.
*/
console.log(reactiveState === state)

/**
 * Modify the code so that we can make the output be false.
*/
const info = { count: 1 }
const reactiveInfo = toRaw(reactive(info))

console.log(isReactive(reactiveInfo))
</script>

<template>
   <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>