<script>
import ApplicationLogo from "@/components/ui/application-logo.vue";
import { mapGetters } from "vuex";

export default {
  auth: "guest",
  components: {
    ApplicationLogo,
  },
  computed: {
    ...mapGetters(["dark"]),
  },
};
</script>
<template>
	<div style="font-family: 'Poppins', sans-serif;">
		<div :class="dark ? 'dark' : 'light'" class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-black">
			<div>
				<NuxtLink to="/">
					<ApplicationLogo />
					<h3 class="text-2xl font-bold mt-3">Habicado</h3>
				</NuxtLink>
			</div>

			<div class="w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg">
				<Nuxt />
			</div>
		</div>
	</div>
</template>