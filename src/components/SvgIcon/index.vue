<template>
  <div>
    <svg>
      <use :xlink:href="prefix + name"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  // xlink:href前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使图标的名字
  name: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss"></style>
