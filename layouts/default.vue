<template>
  <div class="flex flex-col h-[100vh] h-[100dvh] w-full p-4">
    <div class="flex-1 w-full tw-h-full flex">
      <nuxt
        keep-alive
        :keep-alive-props="{ include: ['BaseSearchPage'], max: 1 }"
      />
      </div>
  </div>
</template>
<script setup lang="ts">
</script>