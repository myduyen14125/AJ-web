<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="activity-wrapper py-80">
    <div class="container px-xl-0">
      <h2 class="title text-center">{{ $t('common.team_activity') }}</h2>
      <div class="carousel-wrapper mt-3 pt-4">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, index) in news" :key="index">
            <div
              class="carousel--item"
            >
              <div class="image-wrapper mb-4">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <div class="new-title text-center">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel,
  },
  setup() {
    const settings = {
      dots: true,
      arrows: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5,
    }
    const news = [
      {
        image: 'https://store-images.s-microsoft.com/image/apps.10174.13510798886680377.121bfd20-7a82-47e8-86af-589c3275e643.54fd036e-35d7-4822-83f8-ae4d7ea64d66?mode=scale&q=90&h=300&w=300',
        title: 'Play Caro Weekly !',
      },
      {
        image: 'https://cdn.mos.cms.futurecdn.net/n3QqXJQDgGvk2QPUnrLkAV.jpg',
        title: 'GoEMON Runnning Competition',
      },
      {
        image: 'https://img.olympicchannel.com/images/image/private/f_auto/t_s_pog_staticContent_hero_xl_2x/primary/ydk9vatpnihwfquy6zq3',
        title: 'Football Tournament',
      },
      {
        image: 'https://www.eurekacamping.com/sites/eurekacamping_site/files/tent-camping-at-sunset.jpg',
        title: 'GoEMON Summer Camp',
      },
    ]
    return {
      settings,
      news,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/carousel.scss';
</style>