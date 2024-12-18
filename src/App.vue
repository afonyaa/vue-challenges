<script setup>
import { ref, watch, watchEffect } from "vue"

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
 *
*/

const VActiveStyle = {
  mounted(el, binding) {
    const stylesOriginal = el.style
    console.log(stylesOriginal)
    watchEffect(()=> {
      console.log(binding.value)
      const [styles, condition] = binding.value
      if (condition()) {
        for (const styleProp of Object.keys(styles)) {
          el.style[styleProp] = styles[styleProp]
        }
      }
      else {
        for (const styleProp of Object.keys(styles)) {
          console.log(stylesOriginal[styleProp])
          el.style[styleProp] = ''
        }
      }
    })
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]

const activeTab = ref(0)

function toggleTab(index) {
  activeTab.value = index
}
//todo реализовать без функции

</script>

<template>
 <ul>
  <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'}, () => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
 </ul>
</template>