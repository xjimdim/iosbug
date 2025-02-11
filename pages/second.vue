<template>
  <div class="flex flex-col">
    <h2>SECOND PAGE</h2>

    <div
        class="text-blue font-semibold cursor-pointer underline mt-4"
        @click="replaceRoute"
    >
      click here to go to replace route with some query
    </div>
    <div
        class="text-blue font-semibold cursor-pointer underline mt-4"
        @click="goToPage"
    >
      click here to go to third page programmatically
    </div>
    <div
        class="text-blue font-semibold cursor-pointer underline mt-4"
        @click="goBack"
    >
      Click here to trigger history.back()
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, useRouter} from "@nuxtjs/composition-api";

export default defineComponent({

  setup() {
    const router = useRouter()
    const replaceRoute = async () => {
      await router.replace({name: '__second', query: {sp: 150}})
    }
    const goToPage = async () => {
      await replaceRoute()
      router.push({name: '__third'})
    }

    const goBack = () => {
      if (process.client) {
        window.history.back()
      }
    }

    return {
      goToPage,
      goBack,
      replaceRoute
    }
  }
})
</script>