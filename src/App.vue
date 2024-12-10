<script setup>
import { ref } from 'vue';
import { h } from 'vue'; 


const ListComponent = (props, context) => {
  return h('ul', 
      props.list.map((el, idx) => 
        h('div', 
          [
            h('input', {
              type: "checkbox",
              checked: props.activeIndex === idx, 
              onChange: () => context.emit('toggle', idx)
            }), 
            h('span', el.name)
          ]
        )
      )
  )
}

ListComponent.props = {
  list: {
    type: Array
  },
  activeIndex: {
    type: Number
  }
}

const list = [
  { name: "John" }, 
  { name: "Doe" }, 
  { name: "Smith" }
]

const activeIndex = ref(0)

const toggle = (idx) => {
  activeIndex.value = idx
}

</script>

<template>
   <ListComponent
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>

<style scoped>

</style>
