<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product-wrapper">
    <div class="container px-xl-0">
      <span class="data-label">PRODUCT</span>
      <h2 class="title mt-2">{{ $t('common.product_title') }}</h2>
      <div class="desc-block mt-4 d-flex align-items-end">
        <div class="desc">
          <p>
            Discover and experience our products at GoEMON. We provide the best quality products in social aspects. A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form.
          </p>
        </div>
        <button class="btn-custom btn-white ml-4">{{ $t('common.see_all_product') }}</button>
      </div>
    </div>
    <div class="wrapper-carousel">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="620"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          img-src="https://images7.alphacoders.com/737/737400.jpg"
        >
          <div class="info-block text-left">
            <div class="logo">
              <img src="~assets/images/logo-goemon.png" alt="">
            </div>
            <h1 class="company">{{ $t('common.goemon') }}</h1>
            <div class="name mt-2-5">{{ $t('common.goemon') }}: {{ $t('common.goemon_description') }}</div>
            <hr class="my-4">
            <div class="desc mt-2-5">
              {{ $t('common.goemon_detail') }}<br>
              {{ $t('common.goemon_community') }}<br>
              {{ $t('common.goemon_recruitment') }}<br>
              {{ $t('common.goemon_home') }}<br>
            </div>
            <button class="btn-custom btn-blue mt-4">{{ $t('common.view_goemon') }}</button>
          </div>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide
          img-src="https://images4.alphacoders.com/987/987919.jpg"
        >
        <div class="info-block text-left">
            <div class="logo">
              <img src="~assets/images/logo-goemon.png" alt="">
            </div>
            <h1 class="company">{{ $t('common.goemon') }}</h1>
            <div class="name mt-2-5">{{ $t('common.goemon') }}: {{ $t('common.goemon_description') }}</div>
            <hr class="my-4">
            <div class="desc mt-2-5">
              {{ $t('common.goemon_detail') }}<br>
              {{ $t('common.goemon_community') }}<br>
              {{ $t('common.goemon_recruitment') }}<br>
              {{ $t('common.goemon_home') }}<br>
            </div>
            <button class="btn-custom btn-blue mt-4">{{ $t('common.view_goemon') }}</button>
          </div>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide> -->
      </b-carousel>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.product-wrapper {
  padding: 80px 0 0 0;
  background-color: $bg-blue-lighter;
}
.wrapper-carousel {
  margin: 80px 0 0 0;
  // height: 90vh;
}
// Custom carousel
:deep(.carousel-caption) {
  top: 80px;
}
:deep(li.slick-active button::before) {
  color: $color-blue !important;
  background: $color-blue !important;
}
.info-block {
  width: 527px;
  min-height: 450px;
  height: 100%;
  padding: 40px;
  background-color: $color-white;
  border-radius: 10px;
  text-shadow: none; 
  .company {
    font-size: 32px;
    font-weight: 600;
    color: $color-black;
  }
  .name {
    font-size: 14px;
    font-weight: 400;
    color: $color-gray;
  }
  .desc {
    font-size: 16px;
    font-weight: 400;
    color: $color-gray;
  }
}
</style>