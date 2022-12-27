<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="intro-wrapper py-80">
    <div class="container px-xl-0">
      <div class="path">
        <span class="root">Home</span>
        <img src="@/assets/images/chevron-right.svg" alt="" />
        <span class="child">About Us</span>
      </div>
      <div class="d-flex justify-content-between pt-80">
        <div class="left">
          <span class="data-label">ABOUT US</span>
          <h2 class="title mt-2-5">{{ $t('home.title') }}</h2>
        </div>
        <div class="right">
          <p>{{ $t('home.introduction') }}</p>
        </div>
      </div>
    </div>
    <div class="banner pt-80">
      <img class="banner-image" src="@/assets/images/about-banner.png" alt="" />
      <div class="container px-xl-0">
        <div class="content position-relative text-center">
          <h1 class="title">{{ $t('about.our_company') }}</h1>
          <p class="mt-2-5 w-md-100 w-lg-75 mx-auto">{{ $t('home.introduction') }}</p>
          <button class="btn-custom btn-blue mt-4">
            {{ $t('about.work_with_us') }}
          </button>
        </div>
      </div>
    </div>
    <div class="greeting container px-xl-0 pt-80 d-flex">
      <div class="wrapper-info w-50">
        <span class="data-label">GREETING</span>
        <h2 class="title">{{ $t('home.slogan') }}</h2>
        <p class="mt-2-5">{{ $t('home.introduction') }}</p>
        <br />
        <p>{{ $t('common.goemon_detail') }}</p>
        <br />
        <p>{{ $t('common.goemon_community') }}</p>
        <p>{{ $t('common.goemon_recruitment') }}</p>
        <p>{{ $t('common.goemon_home') }}</p>
      </div>
      <div class="wrapper-image w-50 d-flex justify-content-end">
        <div class="text-center">
          <img src="https://i.pinimg.com/550x/04/cc/57/04cc573bf99423844ad1e82b623777c6.jpg" alt="CEO">
          <div class="name mt-4">Name CEO</div>
          <div class="position mt-2-5">Founder VJ Technologies</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.intro-wrapper {
  .path {
    font-weight: 400;
    .root {
      font-size: 14px;
      color: $color-gray;
    }
    .child {
      color: $color-blue;
    }
  }
  .left {
    width: 40%;
  }
  .right {
    width: 55%;
  }
}
.banner {
  .banner-image {
    position: sticky;
    top: 80px;
    left: 0;
    width: 100%;
    max-height: 606px;
  }
  .content {
    top: -200px;
    padding: 84px 1.5rem;
    height: 400px;
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba(71, 79, 98, 0.1);
    border-radius: 15px;
  }
}
.greeting {
  .wrapper-info {
    padding-right: 40px !important;
  }
  .wrapper-image {
    img {
      width: 503px;
      height: 466px;
      object-fit: cover;
      border-radius: 12px;
    }
    .name {
      font-size: 24px;
      font-weight: 500;
    }
    .position {
      font-size: 16px;
      font-weight: 400;
      color: $color-gray;
    }
  }
}
</style>