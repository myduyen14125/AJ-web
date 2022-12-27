<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact-wrapper py-80">
    <div class="container px-xl-0">
      <div class="d-flex justify-content-between">
        <div class="contact__left-col">
          <span class="data-label">CONTACT US</span>
          <h2 class="title mt-2-5">{{ $t('common.contact_us') }}</h2>
          <div class="desc mt-4">
            <p>
              {{ $t('common.goemon_detail') }}
            </p>
          </div>
        </div>
        <div class="contact__right-col">
          <FormContact :submit="submitForm"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormContact from './FormContact.vue';
export default {
  components: {
    FormContact,
  },
  setup() {
    const submitForm = () => {
      console.log('submit');
    };
    return {
      submitForm,
    };
  },
};
</script>
<style lang="scss" scoped>
.contact {
  &__left-col {
    width: 40%;
  }
  &__right-col {
    width: 60%;
  }
}
</style>