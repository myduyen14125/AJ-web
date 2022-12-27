<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sitemap-wrapper py-80">
    <div class="container px-xl-0">
      <span class="data-label">SITEMAP</span>
      <h2 class="title">{{ $t('common.contact_info') }}</h2>
      <div class="mt-3 pt-4 d-flex justify-content-between">
        <div class="info-wrapper col-lg-4 col-sm-12 pl-xl-0">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_854/https://enouvospace.com/wp-content/uploads/2019/01/IMG_6564-min.jpg"
            alt=""
          />
          <h3 class="name mt-4">VJ Company</h3>
          <span class="desc">Address</span>
          <span class="detail">16-18 An Nhon 3, St Da Nang</span>
          <span class="desc">Phone</span>
          <span class="detail">957349250</span>
          <span class="desc">Email</span>
          <span class="detail">japanwork.ja@gmail.com</span>
        </div>
        <!-- Start sitemap -->
        <div class="col-lg-8 pr-xl-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.927196979395!2d108.23172481479295!3d16.069267288880962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182965649ded%3A0x5e9481a6f50d38d3!2zMTYsIDE4IEFuIE5oxqFuIDMsIEFuIEjhuqNpIELhuq9jLCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1672050823185!5m2!1sen!2s" class="pl-4 rounded" width="100%" height="648" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <!-- <div id="map-wrap">
            <client-only>
              <l-map :zoom="13" :center="[16.035, 108.154]">
                <l-tile-layer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker :lat-lng="[16.03534534, 108.154342]"></l-marker>
              </l-map>
            </client-only>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
}
</script>
<style lang="scss" scoped>
.info-wrapper {
  img {
    width: 397px;
    height: 345px;
    object-fit: cover;
  }
  .name {
    font-size: 36px;
    font-weight: 600;
  }
  span {
    display: block;
    margin-top: 12px;
  }
  .desc {
    color: $color-gray;
    font-size: 14px;
  }
  .detail {
    color: $color-blue;
    font-size: 16px;
  }
}
#map-wrap {
  height: 648px;
  width: 100%;
  border-radius: 10px;
  padding-left: 24px;
}
</style>