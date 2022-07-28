<script>
import NavLink from "@/components/NavLink.vue";
import DialogModal from "../components/DialogModal.vue";

export default {
  components: {
    NavLink,
	DialogModal
  },
  data() {
    return {
      openHabitCreation: false,
    };
  },
  methods: {
    showHabbitCreation() {
      this.openHabitCreation = true;
    },
    hideHabbitCreation() {
      this.openHabitCreation = false;
    },
  },
};
</script>
<template>
	<div class="dark:bg-gray-800" style="font-family: 'Poppins', sans-serif;">
		<div class="w-full h-screen bg-gray-50">
			<div class="container mx-auto py-4">
				<div class="max-w-screen-xl px-4 py-6 flex items-center justify-between">
					<div>
						<PortalTarget name="header" />
					</div>

					<nuxt-link to="/profile">
						<div class="w-8 h-8 bg-secondary rounded-full"></div>
					</nuxt-link>
				</div>

				<div>
					<Nuxt />
				</div>
			</div>
			<section class="block fixed inset-x-0 bottom-0 z-10 bg-secondary rounded-t-[25px] shadow" v-if="$route.fullPath !== '/' && $route.fullPath !== '/register' && $route.fullPath !== '/login'">
				<div class="relative z-0 flex border rounded-3xl overflow-hidden dark:border-gray-700 dark:divide-gray-700">
					<nav-link :active="$route.fullPath === '/home'" to="/home">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="40" viewBox="0 0 24 24" width="40">
								<path d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="$route.fullPath === '/insights'" to="/insights">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="40" viewBox="0 0 24 24" width="40">
								<path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M8 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M16 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M7.75 10.75H16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<button type="button" @click="showHabbitCreation()" class="group relative min-w-0 flex-1 bg-secondary py-4 px-4 text-primary hover:text-white text-sm font-medium text-center overflow-hidden hover:bg-primary focus:z-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400">
						<svg class="inline-block mb-1" fill="none" height="40" viewBox="0 0 24 24" width="40">
							<path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							<path d="M12 8.75003V15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							<path d="M15.25 12L8.75 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
						</svg>
					</button>

					<nav-link :active="$route.fullPath === '/inventory'" to="/inventory">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="40" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="$route.fullPath === '/settings'" to="/settings">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="40" viewBox="0 0 24 24" width="40">
								<path d="M4.75 8H7.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M12.75 8H19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M4.75 16H12.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M17.75 16H19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<circle cx="10" cy="8" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<circle cx="15" cy="16" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>
				</div>
			</section>
		</div>

		<DialogModal :show="openHabitCreation" @close="hideHabbitCreation()">
			<template #title>
				<h2 class="text-md font-semibold text-gray-600 text-center">Habbit Creation</h2>
			</template>

			<template #content></template>
		</DialogModal>
	</div>
</template>