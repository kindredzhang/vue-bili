<template>
  <section class="ant-layout" :class="classes">
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { VNode, Component } from 'vue'

import { useSlots } from 'vue'
import 'ant-design-vue/es/layout/style/index.css'

defineOptions({
  name: 'BiliLayout'
})

function useClasses() {
  const slots = useSlots()
  let hasSider = false
  if (slots && slots.default) {
    const nodeList: VNode[] = slots.default() as VNode[]
    console.log(nodeList)

    hasSider = nodeList.some((node: VNode) => {
      const component = node.type as Component
      return component.name === 'BiliSider'
    })
  }
  return hasSider ? 'ant-layout-has-sider' : ''
}

const classes = useClasses()
console.log(classes)
</script>
