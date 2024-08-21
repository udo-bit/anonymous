<script setup lang="ts">
const message = useMessage()
const handleClick = () => {
  message.success(
      'Hello, VitePress!',
      {
        duration: 1000
      }
  )
}
</script>

<template>
  <div>
    <n-button @click="handleClick">
      按钮
    </n-button>
  </div>

</template>

<style scoped>

</style>
