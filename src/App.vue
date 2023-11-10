<template>
  <div>
    <h1>App根组件</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: 'admin' })
})
</script>

<style scoped lang="scss"></style>
