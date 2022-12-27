

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":["en","vi","ja"]},
  vueI18nLoader: false,
  locales: [{"code":"ja","iso":"ja-JP","name":"Japanese","file":"ja.json"},{"code":"vi","iso":"vi-VN","name":"Vietnamese","file":"vi.json"},{"code":"en","iso":"en-EN","name":"English","file":"en.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/home/yuu/Documents/Git/Project/AJ-web/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"my_custom_cookie_name","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: true,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  encodePaths: false,
  normalizedLocales: [{"code":"ja","iso":"ja-JP","name":"Japanese","file":"ja.json"},{"code":"vi","iso":"vi-VN","name":"Vietnamese","file":"vi.json"},{"code":"en","iso":"en-EN","name":"English","file":"en.json"}],
  localeCodes: ["ja","vi","en"],
}

export const localeMessages = {
  'ja.json': () => import('../../locales/ja.json' /* webpackChunkName: "lang-ja.json" */),
  'vi.json': () => import('../../locales/vi.json' /* webpackChunkName: "lang-vi.json" */),
  'en.json': () => import('../../locales/en.json' /* webpackChunkName: "lang-en.json" */),
}
