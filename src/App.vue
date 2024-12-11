<script setup>
import { ref, provide } from "vue"
import ChildComponent from "./components/ChildComponent.vue";

const timer = ref(0)
const count = ref(0)

provide("timer", timer)
provide("count", count)

</script>

<template>
    <ChildComponent/>
</template>

<style scoped>

</style>
