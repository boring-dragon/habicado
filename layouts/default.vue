<script>
import NavLink from "@/components/NavLink.vue";
export default {
  components: {
    NavLink,
  },

  data() {
	return {

	}
  }
};
</script>
<template>
	<div>
		<div class="w-full h-screen">
			<div class="container mx-auto">
				<div class="max-w-3xl">
						<nuxt />
				</div>
			
			</div>
			<section class="block fixed inset-x-0 bottom-0 z-10 bg-secondary rounded-t-[25px] shadow" v-if="$route.fullPath !== '/'">
				<div class="flex items-center justify-between px-2" id="tabs">
					<nav-link :active="$route.fullPath === '/home'" name="Home" to="/home">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="25" viewBox="0 0 24 24" width="25">
								<path d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="$route.fullPath === '/insights'"  name="Insight" to="/insights">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="25" viewBox="0 0 24 24" width="25">
								<path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M8 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M16 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M7.75 10.75H16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="false" name="New" to="/">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="25" viewBox="0 0 24 24" width="25">
								<path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M12 8.75003V15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								<path d="M15.25 12L8.75 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="$route.fullPath === '/archive'" name="Archive" to="/archive">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="25" viewBox="0 0 24 24" width="25">
								<path d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
							</svg>
						</template>
					</nav-link>

					<nav-link :active="$route.fullPath === '/settings'" name="Settings" to="/settings">
						<template #icon>
							<svg class="inline-block mb-1" fill="none" height="25" viewBox="0 0 24 24" width="25">
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
	</div>
</template>