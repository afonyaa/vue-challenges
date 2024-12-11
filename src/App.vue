<script setup>
import { ref, watchEffect, onUnmounted, onMounted } from 'vue';


const useToggle = (initialValue) => {
    const state = ref(initialValue)
    const toggle = () => {
        console.log('toggle', state.value)
        state.value = !state.value
    }
    return {state, toggle}
}

const {state, toggle} = useToggle(false)

watchEffect(() => {
    console.log(state)
})

</script>

<template>
    <p>
        State: {{ state ? 'ON': 'OFF' }}
    </p>
    <button @click="toggle">
        Toggle state
    </button>
</template>

<style scoped>

</style>
