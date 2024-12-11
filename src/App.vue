<script setup>
import { ref, watchEffect, onUnmounted, onMounted } from 'vue';

const useEventListener = (target, event, callback) => {
    onMounted(() => {
        target.addEventListener(event, callback)
    })

    onUnmounted(() => {
        target.removeEventListener(event, callback)
    })
}

const useMouse = () => {
    const x = ref(0)
    const y = ref(0)

    const callback = (e) => {
        y.value = e.clientY
        x.value = e.clientX
    }

    useEventListener(window, 'mousemove', callback)

    return {x, y}

}

const {x, y} = useMouse()

</script>

<template>
{{ x }}
{{ y }}
</template>

<style scoped>

</style>
