<template>
  <div class="home-wrapper">
    <Banner />
    <div class="">
      <About />
      <Service />
      <Product />
      <News />
      <Recruitment />
    </div>
  </div>
</template>

<script>
import Banner from '~/components/home/Banner.vue'
import About from '~/components/home/About.vue'
import Service from '~/components/home/Service.vue'
import Product from '~/components/home/Product.vue'
import News from '~/components/home/News.vue'
import Recruitment from '~/components/home/Recruitment.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    About,
    Service,
    Product,
    News,
    Recruitment
  },
  layout: 'home',
}
</script>

<style lang="scss">
</style>