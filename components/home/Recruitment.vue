<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="recruitment-wrapper d-flex align-items-center">
    <div class="image w-50">
      <img src="~/assets/images/recruitment.png" alt="recruitment" />
    </div>
    <div class="content-wrapper">
      <span class="data-label">RECRUITMENT</span>
      <h2 class="title mt-2">{{ $t('common.recruitment_title') }}</h2>
      <div class="desc mt-4">
        <p>
          Completing a degree in development studies can lead to many exciting jobs working to address global challenges. These can include international aid Tenetur illo ducimus consequuntur fugit ab placeat vitae officiis, impedit in nam consequatur!
        </p>
      </div>  
      <button class="btn-custom btn-blue mt-4">{{ $t('common.see_all_recruitment') }}</button>
    </div>
  </div>
</template>
<script>
export default ({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.recruitment-wrapper {
  padding: 80px 0 0 0;
  .image {
    img {
      width: 100%;
      height: 441px;
      border-top-right-radius: 16px;
    }
  }
}
.content-wrapper {
  max-width: 510px;
  margin-left: 125px;
}
</style>