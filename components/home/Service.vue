<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="service-wrapper">
    <div class="container px-xl-0">
      <span class="data-label">SERVICE</span>
      <h2 class="title mt-2">{{ $t('common.service_title') }}</h2>
      <div class="desc-block mt-4 d-flex align-items-end">
        <div class="desc">
          <p>
            Software Reliability is the quality of the software which ensures that the performance of the software is consistent and the software is trustworthy. This also ensures that the accuracy of the software is quite good and almost approaching to the perfection.
          </p>
        </div>
        <button class="btn-custom btn-white ml-4">{{ $t('common.see_all_service') }}</button>
      </div>
      <div class="field-block">
        <div class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-12 col-md-6 col-lg-6"
          >
            <div class="field-item bg-white position-relative">
              <div class="icon d-flex justify-content-center align-items-center text-white">
                <font-awesome-icon :icon="service.icon" />
              </div>
              <div class="name d-flex align-items-center">
                <span>{{ service.name }}</span>
                <font-awesome-icon class="name-icon ml-2-5" icon="fa-solid fa-arrow-right" />
              </div>
              <div class="desc mt-2-5">{{ service.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const services = [
      {
        icon: 'fa-solid fa-mobile-screen',
        name: "Mobile Application Development",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        name: "Web Development",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },
      {
        icon: 'fa-solid fa-laptop',
        name: "Software Development",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        name: "Machine Learning",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        name: "Deep Learning",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },
      {
        icon: 'fa-solid fa-mobile-screen',
        name: "Microservices",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod reprehenderit ."
      },

    ]
    return {
      services
    }
  }
}
</script>
<style lang="scss" scoped>
.service-wrapper {
  padding: 80px 0 0 0;
  background-color: $bg-blue-lighter;
}
.field {
  &-item {
    margin: 80px 0 0 0;
    padding: 52px 30px;
    min-height: 194px;
    border-radius: 15px;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
    }
    .icon {
      position: absolute;
      top: -40px;
      left: 30px;
      width: 80px;
      height: 80px;
      border-radius: 12px;
      background-color: $bg-blue;
      font-size: 36px;
    }
    .name {
      font-size: 20px;
      font-weight: 500;
      color: $color-black;
      &-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid $color-blue;
        color: $color-blue;
        padding: 3px;
        box-sizing: border-box;
      }
    }
    .desc {
      font-size: 16px;
      font-weight: 400;
      color: $color-gray;
    }
  }
}
</style>