<template>
  <div class="flex flex-col">
    <h2>THIRD PAGE</h2>
    <div>
      try to go back using browser navigation here, only on Chrome iOS 18.3
    </div>
    <div>it should show you the index on back instead of the second page</div>
    <div
      class="text-blue font-semibold cursor-pointer underline mt-4"
      @click="goBack"
    >
      Click here to trigger history.back()
    </div>
  </div>
</template>

<script setup lang="ts">
const goBack = ()=>{
  if(process.client){
    window.history.back()
  }
}
</script>
