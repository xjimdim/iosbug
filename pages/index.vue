<template>
  <div class="flex flex-col">
    <h2>INDEX PAGE</h2>
    <NuxtLink
      class="text-blue font-semibold cursor-pointer underline mt-4"
      :to="{ name: '__second' }"
    >
      click here to go to second page >
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
