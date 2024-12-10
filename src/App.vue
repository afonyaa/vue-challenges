<script setup>
import { Teleport } from 'vue';

const message = "Hello world"
</script>

<template>
<Teleport to="body">
  {{ message }}
</Teleport>
</template>

<style scoped>

</style>
