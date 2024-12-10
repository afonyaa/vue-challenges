<script setup>
import { Mybutton } from './components/MyButton';

const onClick = () => {
  console.log('clicked')
}

</script>

<template>
  <Mybutton :disabled="false" @custom-click="onClick">
    My button
  </Mybutton>
</template>

<style scoped>

</style>
