<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="work-wrapper py-80">
    <div class="container px-xl-0 d-flex flex-md-column-reverse flex-lg-row justify-content-between">
      <div class="team col-lg-6 col-sm-12 pl-lg-0">
        <div v-for="(team, index) in teams" :key="team.name">
          <img v-if="index < 3" :src="team.image" alt="" />
          <h4 v-if="index < 3" class="team-name my-4 text-center">{{ team.name }}</h4>
        </div>
      </div>
      <div class="team col-lg-6 col-sm-12 pr-lg-0">
        <div class="info-wrapper mb-4">
          <span class="data-label">VJ TEAM</span>
          <h2 class="title mt-2-5">{{ $t('about.work_with_us') }}</h2>

          <div class="mt-3">
            <h4 class="title-smaller pt-4">Our strengths</h4>
            <p class="mt-4">{{ $t('common.goemon_detail')}} {{ $t('common.goemon_detail')}}</p>
          </div>
          <div>
            <h4 class="title-smaller pt-4">Development system</h4>
            <ul class="mt-4">
              <li class="mt-2-5">
                <span class="number d-inline-block mr-2 text-white text-center">1</span>
                {{ $t('common.goemon_community') }}</li>
              <li class="mt-2-5">
                <span class="number d-inline-block mr-2 text-white text-center">2</span>
                {{ $t('common.goemon_recruitment') }}</li>
              <li class="mt-2-5">
                <span class="number d-inline-block mr-2 text-white text-center">3</span>
                {{ $t('common.goemon_home') }}</li>
            </ul>
          </div>
        </div>
        <div v-for="(team, index) in teams" :key="team.name">
          <img v-if="index >= 3" :src="team.image" alt="" />
          <h4 v-if="index >= 3" class="team-name my-4 text-center">{{ team.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const teams = [
      {
        name: 'Developer',
        image: require('~/assets/images/working/working-1.png'),
      },
      {
        name: 'UI/UX',
        image: require('~/assets/images/working/working-2.png'),
      },
      {
        name: 'Marketing',
        image: require('~/assets/images/working/working-3.png'),
      },
      {
        name: 'Tester',
        image: require('~/assets/images/working/working-4.png'),
      },
      {
        name: 'VJ',
        image: require('~/assets/images/working/working-5.png'),
      },
    ]
    return {
      teams
    }
  },
}
</script>
<style lang="scss" scoped>
.work-wrapper {
  background-color: $bg-blue-lighter;
}
.team {
  .info-wrapper {
    .title-smaller {
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
    }
    .number {
      width: 24px;
      height: 24px;
      background-color: $bg-purple;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 400;
      padding-top: 2px;
    }
  }
  &-name {
    font-size: 14px;
    color: $color-gray;
  }
  img {
    width: 100%;
    border-radius: 12px;
  }
}
</style>