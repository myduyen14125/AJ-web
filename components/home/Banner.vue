<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner-wrapper">
    <div class="container px-0 d-flex flex-column justify-content-center align-items-center h-100 text-white">
      <div class="home-title">
        <h1 class="text-uppercase">{{ $t('home.title') }}</h1>
      </div>
      <div class="home-desc">
        <p>
          {{ $t('home.slogan')  }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss" scoped>
.banner-wrapper {
  background-image: url('~/assets/images/home-bg.svg');
  background-size: cover;
  height: 100vh;
  padding-top: 80px;
}
.home-title {
  font-weight: 600;
  font-size: 48px;
}
</style>