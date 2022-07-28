export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "habit-tracker",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	env: {
		backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
	},

	googleFonts: {
		families: {
			Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/main.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxt/postcss8", "@nuxtjs/google-fonts"],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "portal-vue/nuxt",  ['nuxt-tailvue', {toast: true}],],

	axios: {
		baseURL: process.env.NUXT_PUBLIC_BACKEND_URL,
		credentials: true,
	},


  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.NUXT_PUBLIC_BACKEND_URL
      },
    }
  },

  router: {
    middleware: ['auth']
  },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
};
