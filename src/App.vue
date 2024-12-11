<script setup>
import { MyTree } from './components/MyTree';

</script>

<template>
    <MyTree
     :data="{
        key: 0,
        title: 'Node 0',
        children: [
            {
                key: 1,
                title: 'Node 1',
                children: [
                    {
                        key: 3,
                        title: 'Node 3',
                        children: [
                            {
                                key: 4,
                                title: 'Node 4',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                key: 2,
                title: 'Node 2',
                children: []
            },
        ]  
      }"
    />
</template>

<style scoped>

</style>
