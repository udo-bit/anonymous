<script setup lang="ts">
import SideContent from "./side-content.vue"
import SideHeader from "./side-header.vue";
import SideSider from "./side-sider.vue";
import SideFooter from "./side-footer.vue";

const props = withDefaults(defineProps<{
      headerHeight: number | string;
      footerHeight: number | string;
    }>(), {
      headerHeight: 50,
      footerHeight: 40,
    },
);
const headerHeightStyle = computed(() => props.headerHeight + 'px')
const footerHeightStyle = computed(() => props.footerHeight + 'px')
const ContentHeightStyle = computed(() => `calc(100vh - ${props.headerHeight + props.footerHeight}px)`)
</script>

<template>
  <n-layout>
    <SideHeader>颐和园路</SideHeader>
    <n-layout has-sider>
      <SideSider>
        海淀桥
      </SideSider>
      <SideContent>
        <slot/>
      </SideContent>
    </n-layout>
    <SideFooter/>
  </n-layout>
</template>

<style scoped>
.n-layout-header {
  background: #212328;
  height: v-bind(headerHeightStyle);
}

.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  height: v-bind(footerHeightStyle);
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  height: v-bind(ContentHeightStyle);
}
</style>
