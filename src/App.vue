<script setup lang="ts">
import Layouts from "/src/layouts/index.vue"
</script>

<template>
  <n-config-provider>
    <AppProvider>
      <router-view/>
    </AppProvider>
  </n-config-provider>
</template>
