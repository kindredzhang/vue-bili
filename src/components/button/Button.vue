<template>
  <button :class="classes" :type="nativeType">
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import 'ant-design-vue/es/button/style/index.css'

type ButtonType = 'primary' | 'default' | 'danger' | 'warning' | 'link'
type ButtonNativeType = 'button' | 'submit' | 'reset'
type ButtonSize = 'lg' | 'sm'

interface ButtonProps {
  type?: ButtonType
  nativeType?: ButtonNativeType
  size?: ButtonSize
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  nativeType: 'button',
  size: 'lg'
})

const classes = computed(() => {
  return [
    'ant-btn',
    props.size ? `ant-btn-${props.size}` : '',
    `ant-btn-${props.type}`,
    `ant-btn-${props.nativeType}`
  ]
})
</script>
