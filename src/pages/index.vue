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
  <div class="h-full">
    <iframe
        id="child"
        src="https://www.liepin.com/job/1968741943.shtml?pgRef=c_pc_search_page%3Ac_pc_search_job_listcard%402_68741943%3A1%3A2a9d5a3d-4a6a-491c-ab90-31bb60927b4e&d_sfrom=search_prime&d_ckId=null&d_curPage=0&d_pageSize=40&d_headId=null&d_posi=0&skId=hg22ruw6cesnj72h58o3m3gm45lw9pna&fkId=2cjmbrtuldczbe8v7hf012rtp0j5jh2b&ckId=2cjmbrtuldczbe8v7hf012rtp0j5jh2b&sfrom=search_job_pc&curPage=0&pageSize=40&index=0"
        style="width: 50%; height: 100%"
    ></iframe>
  </div>

</template>

<style scoped>

</style>
