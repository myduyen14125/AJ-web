<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="news-wrapper bg-white">
    <div class="container px-xl-0">
      <div class="text-center">
        <span class="data-label">NEWS & INSIGHTS</span>
        <h2 class="title mt-2">{{ $t('common.post_news') }}</h2>
        <div class="desc-block mt-4 d-flex align-items-end">
          <div class="desc">
            <p>
              A Social Platform for Real People, Real News, and Civil Conversations. Remember when social media was fun, introduced you to big ideas and cool. The most hot trend and newest news will be updated in our website daily!!
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-wrapper mt-5">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, index) in news" :key="index">
            <div
              class="carousel--item"
            >
              <div class="image-wrapper mb-4">
                <img :src="item.image" alt="" />
              </div>
              <div class="content">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="category px-2 d-flex align-items-center">{{ item.category }}</div>
                  <div class="date">{{ item.date }}</div>
                </div>
                <div class="new-title mt-2-5">{{ item.title }}</div>
                <div class="desc mt-2-5">{{ item.desc }}</div>
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
        image: 'https://cdn.lifehack.org/wp-content/uploads/2020/03/importance-of-teamwork.jpg',
        title: 'What is the key of teamwork?',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit veniam praesentium aliquid totam iusto maiores possimus voluptatibus accusantium temporibus nihil deserunt nam ea, debitis vel asperiores fugiat dolore.',
        category: 'Info',
        date: 'December 25th, 2022',
      },
      {
        image: 'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/3-rifkq7g0kj79ubfl0zua.jpg',
        title: 'Introduction some tools help us to work better',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit veniam praesentium aliquid totam iusto maiores possimus voluptatibus accusantium temporibus nihil deserunt nam ea, debitis vel asperiores fugiat dolore.',
        category: 'Info',
        date: 'December 25th, 2022',
      },
      {
        image: 'https://www.theladders.com/wp-content/uploads/teamwork_190415.jpg',
        title: 'Something about life in the office',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit veniam praesentium aliquid totam iusto maiores possimus voluptatibus accusantium temporibus nihil deserunt nam ea, debitis vel asperiores fugiat dolore.',
        category: 'Info',
        date: 'December 25th, 2022',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit veniam praesentium aliquid totam iusto maiores possimus voluptatibus accusantium temporibus nihil deserunt nam ea, debitis vel asperiores fugiat dolore.',
        category: 'Info',
        date: 'December 25th, 2022',
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
.news-wrapper {
  padding: 80px 0 80px 0;
  background-color: #f8f8f8;
}
.carousel {
  &--item {
    .category {
      height: 31px;
      background-color: $bg-gray;
      border-radius: 10px;
    }
    .new-title {
      color: $color-black;
      font-weight: 500;
      font-size: 24px;
      transition: 0.3s ease-out;
    }
    .desc {
      font-size: 16px;
    }
  }
}

</style>