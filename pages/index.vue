<script>
import ApplicationLogo from "@/components/ui/application-logo.vue";
import { colorify, flatten } from "lottie-colorify";
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/hello-animation.json";

export default {
  components: {
    ApplicationLogo,
    Lottie,
  },
  data() {
    return {
      lottieOptions: {
        animationData: flatten("#0D3440", animationData.default),
      },
    };
  }
};
</script>
<template>
	<section>
		<div class="max-w-screen-xl px-4 py-32 mx-auto">
			<div class="max-w-xl mx-auto text-center flex flex-col items-center">
				<ApplicationLogo />

				<lottie :height="300" :width="300" :options="lottieOptions" />

				<div class="space-y-8">
					<h1 class="font-extrabold text-5xl text-primary">Welcome To</h1>

					<div class="relative inline-block group focus:outline-none focus:ring" to="/home">
						<span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>

						<span class="relative inline-block px-8 py-3 text-3xl font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">Habicado</span>
					</div>
					<p class="mt-4 sm:leading-relaxed text-xl">Habicado is a simple, fast way to track your habbits.</p>

					<div class="flex flex-wrap justify-center gap-4 mt-8">
						<NuxtLink class="relative inline-block group focus:outline-none focus:ring" to="/home">
							<span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>

							<span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">Get Started</span>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
