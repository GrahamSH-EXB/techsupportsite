import "consola";
import fetch from "node-fetch"
if (process.env.NODE_ENV === "development") {
  consola.info(
    "Hello, and thanks for having interest in my site. However, I am not accepting contributions, as this is my personal site, and my project. If you want to contribute to something, find another open source project that needs your help. \n~ GrahamSH"
  );
}
import tailwindTypography from "@tailwindcss/typography";
import lineClamp from "tailwindcss-line-clamp";

export default {
  ssr: false,
  telemetry: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    async routes() {
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GrahamSH",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },
  tailwindcss: {
    config: {
      mode: "jit",
      plugins: [tailwindTypography, lineClamp],
      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pwa: {
    icons: {
      source: `[srcDir]/[staticDir]/logo.svg`,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
  ],

  workbox: {
    runtime: [
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: ".*",
        handler: "staleWhileRevalidate",
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "vue-plausible"],
  plausible: {
    domain: "grahamsh.com",
    apiHost: "https://analytics.jeffalo.net",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //parallel: true,
  },
  sitemap: {
    hostname: "https://grahamsh.com",
    gzip: true,
    exclude: ["/blogs/**"],
  },
  plugins: ["~/plugins/json-ld", "~/plugins/unicons"],
  storybook: {
    stories: ["~/components/**/*.stories.mdx"],
    addons: ["@storybook/addon-docs"],
    parameters: {
      //viewMode: 'docs'
    },
  },
  
};
