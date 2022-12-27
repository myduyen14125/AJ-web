<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footer-wrapper">
    <div class="container px-xl-0">
      <div class="d-flex">
        <div class="left-col">
          <ul class="path-block nav-link d-flex align-items-center p-0">
            <li class="nav-item"><nuxt-link to="#">About Us</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">Service</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">Product</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">News</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">Recruitment</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">Contact Us</nuxt-link></li>
          </ul>
          <ul class="policy-block nav-link d-flex align-items-center p-0">
            <li class="nav-item"><nuxt-link to="#">Privacy Policy</nuxt-link></li>|
            <li class="nav-item"><nuxt-link to="#">Terms of Use</nuxt-link></li>|
            <li class="nav-item"><nuxt-link to="#">Sitemap</nuxt-link></li>
          </ul>
        </div>
        <div class="right-col">
          <div class="logo"><nuxt-link to="#">AJ Logo</nuxt-link></div>
          <div class="list-icon mt-4">
            <ul class="d-flex align-items-center p-0">
              <li class="nav-item d-flex justify-content-center align-items-center">
                <nuxt-link to="#"><font-awesome-icon icon="fa-solid fa-user"/></nuxt-link>
              </li>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <nuxt-link to="#"><font-awesome-icon icon="fa-solid fa-laptop"/></nuxt-link>
              </li>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <nuxt-link to="#"><font-awesome-icon icon="fa-solid fa-user"/></nuxt-link>
              </li>
              <li class="nav-item d-flex justify-content-center align-items-center">
                <nuxt-link to="#"><font-awesome-icon icon="fa-solid fa-user"/></nuxt-link>
              </li>
            </ul>
          </div>
          <p class="sub-title mt-5">Subscribe to our news</p>
          <input class="sub-input mt-4" type="text" placeholder="Email" />
        </div>
      </div>

      <hr />
      <p class="text-center">Copyright© VJ, Inc. All rights reserved.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $color-white;
  transition: 0.3s ease-out;
  &:hover {
    color: $color-blue;
  }
}
ul {
  li {
    display: inline-block;
    margin-right: 40px;
    a {
      font-size: 20px;
      font-weight: 500;
    }
  }
}
hr {
  margin: 60px 16px;
  background: $color-white;
}
.footer {
  &-wrapper {
    height: 527px;
    background-color: $bg-black;
    padding: 80px 0;
    color: $color-white;
  }
}
.policy-block {
  margin-top: 100px;
  li {
    margin-left: 30px;
    font-weight: 400;
    font-size: 18px;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
}
.right-col {
  .logo {
    font-size: 20px;
    font-weight: 500;
  }
  input {
    background: $bg-black !important;
    color: $color-white;
    border-radius: 90px;
    padding: 4px 16px;
    outline: none;
  }
}
.list-icon {
  li {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    border: 1px solid $color-white;
    border-radius: 50%;
    &:nth-child(4) {
      margin-right: 0;
    }
  }
}
</style>