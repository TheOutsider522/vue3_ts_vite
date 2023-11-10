<template>
  <div>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
