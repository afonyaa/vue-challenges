<script setup>
import { defineModel, ref} from "vue"
import MyInput from "./components/MyInput.vue";

const val = ref('')

</script>

<template>
  <MyInput v-model.capitalize="val" />
</template>