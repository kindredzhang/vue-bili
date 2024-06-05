<template>
  <header class="ant-layout-header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BiliHeader'
})

interface HeaderProps {
  height?: string
}
withDefaults(defineProps<HeaderProps>(), {
  height: '60px'
})

</script>

<style>
.ant-layout-header {
  text-align: center;
}
</style>
