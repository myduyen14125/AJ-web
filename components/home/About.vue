<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="position-relative">
    <div class="container px-xl-0">
      <div
        class="
          about-wrapper pt-80
          d-flex
          flex-column flex-xl-row
          justify-content-between
          align-items-start align-items-xm-
          ct
        "
      >
        <div class="about__left-col">
          <span class="data-label">ABOUT US</span>
          <h2 class="title mt-2-5">{{ $t('home.title') }}</h2>
          <div class="desc mt-4">
            <p>
              {{ $t('home.introduction') }}
            </p>
          </div>
          <button class="btn-custom btn-blue mt-4">{{ $t('common.more_about_us') }}</button>
        </div>
        <div class="about__right-col">
          <img
            class="about-img"
            src="~@/assets/images/about-us.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="about__bottom"></div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.about {
  &__left-col {
    width: 45%;
  }
  &__right-col {
    width: 50%;
  }
  &-img {
    width: 100%;
    max-height: 629px;
    border-radius: 12px;
    object-fit: cover;
  }
}
.about__bottom {
  width: 100%;
  height: 104px;
  background-color: $bg-blue-lighter;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>