<template>
  <div class="flex flex-col">
    <h2>SECOND PAGE</h2>

    <div
        v-if="false"
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

    const setUrlParam = (url, paramName, paramValue) => {
      try {
        // remove the hash part before operating on the url
        const i = url.indexOf('#')
        const hash = i === -1 ? '' : url.substr(i)
        url = i === -1 ? url : url.substr(0, i)

        const re = new RegExp('([?&])' + paramName + '=.*?(&|$)', 'i')
        const separator = url.includes('?') ? '&' : '?'
        if (url.match(re)) {
          url = url.replace(re, '$1' + paramName + '=' + paramValue + '$2')
        } else {
          url = url + separator + paramName + '=' + paramValue
        }
        return url + hash // finally append the hash as well
      } catch (e) {
        return null
      }
    }
    const replaceRoute = async () => {
      const replacedLocation = setUrlParam(
          window.location.pathname + window.location.search,
          'sp',
          150
      )
      window.history.replaceState(
          {isInSearchPage: false, resetSearchState: true},
          document.title || '',
          replacedLocation
      )

    }
    const goToPage = async () => {
      await replaceRoute()
      // await replaceRoute()
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