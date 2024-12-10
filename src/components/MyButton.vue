<script setup>
defineProps({
  type: {
    validator(value, props) {
      // Значение должно соответствовать одной из этих строк
      return ['success', 'warning', 'danger'].includes(value)
    }
  }
})
</script>

<template>
    <button>
        button
    </button>
</template>

<style scoped>

</style>
