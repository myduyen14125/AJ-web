<template>
  <div class="about-wrapper pt-80">
    <About />
    <Sitemap />
  </div>
</template>
<script>
import About from '~/components/contact/About.vue'
import Sitemap from '~/components/about/Sitemap.vue'

export default {
  name: 'AboutPage',
  components: {
    Sitemap,
    About, 
  },
  layout: 'default',
}
</script>
<style scoped>
</style>