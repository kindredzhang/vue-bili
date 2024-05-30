<template>
  <div>
    About
    <Button @click="store.increment" style="color: red"
      >{{ store.count }} * 2 = {{ store.doubleCount }}</Button
    >
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counter'
const store = useCounterStore()
</script>
