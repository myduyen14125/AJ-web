<template>
  <div class="about-wrapper pt-80">
    <Intro />
    <Working />
    <Activities />
    <Sitemap />
  </div>
</template>
<script>
import Intro from '~/components/about/Intro.vue'
import Working from '~/components/about/Working.vue'
import Activities from '~/components/about/Activities.vue'
import Sitemap from '~/components/about/Sitemap.vue'

export default {
  name: 'AboutPage',
  components: {
    Intro,
    Working,
    Activities,
    Sitemap,
  },
  layout: 'default',
}
</script>
<style scoped>
</style>