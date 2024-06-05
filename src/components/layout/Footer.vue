<template>
  <footer class="ant-layout-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BiliFooter'
})

interface FooterProps {
  height?: string
}
withDefaults(defineProps<FooterProps>(), {
  height: '60px'
})
</script>

<style>
.ant-layout-footer {
  text-align: center;
}
</style>
