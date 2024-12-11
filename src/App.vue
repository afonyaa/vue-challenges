<script setup>
import { ref, watchEffect, onUnmounted, onMounted } from 'vue';

const useCounter = (initialValue, options) => {
    const count = ref(initialValue)
    
    const dec = () => {
        if (count.value > options.min) {
            count.value--
        }
    }

    const inc = () => {
        if (count.value < options.max) {
            console.log('inc')
            count.value++
        }
    }
    
    const reset = () => {
        count.value = initialValue
    }

    return {
        inc, dec, reset, count
    }
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })


</script>

<template>
    <button @click="dec">
        -
    </button>
    <div>
        {{count}}
    </div>
    <button @click="inc">
        +
    </button>
    <button @click="reset">
        reset
    </button>
</template>

<style scoped>

</style>
