export { default as AboutActivities } from '../../components/about/Activities.vue'
export { default as AboutIntro } from '../../components/about/Intro.vue'
export { default as AboutSitemap } from '../../components/about/Sitemap.vue'
export { default as AboutWorking } from '../../components/about/Working.vue'
export { default as CommonFooter } from '../../components/common/Footer.vue'
export { default as CommonTopNavbar } from '../../components/common/TopNavbar.vue'
export { default as HomeAbout } from '../../components/home/About.vue'
export { default as HomeBanner } from '../../components/home/Banner.vue'
export { default as HomeNews } from '../../components/home/News.vue'
export { default as HomeProduct } from '../../components/home/Product.vue'
export { default as HomeRecruitment } from '../../components/home/Recruitment.vue'
export { default as HomeService } from '../../components/home/Service.vue'
export { default as ContactAbout } from '../../components/contact/About.vue'
export { default as ContactFormContact } from '../../components/contact/FormContact.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
