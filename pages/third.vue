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