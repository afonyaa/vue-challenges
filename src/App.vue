<script setup>
import { ref, watch, watchEffect } from "vue"


</script>

<template>
    <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
<button @click.alt.shift="onClick1">A</button>

<!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
<button @click.shift.exact="onCtrlClick">A</button>

<!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick2">A</button>
</template>