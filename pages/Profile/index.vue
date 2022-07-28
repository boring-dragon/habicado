<script>
import CharacterProfileCard from "./partials/CharacterProfileCard.vue";
export default {
  components: {
    CharacterProfileCard,
  },

  mounted() {
    this.fetchCharacters();
  },

  data() {
    return {
      characters: [],
    };
  },

  methods: {
    async fetchCharacters() {
      const response = await this.$axios.get("/api/getCharacters");
      this.characters = response.data.data;
    },

    async purchaseCharacter(character) {},
  },
};
</script>
<template>
	<div class="overflow-y-scroll py-12 mx-auto space-y-8">
		<Portal to="header">
			<h2 class="text-3xl font-bold text-primary">Profile</h2>
		</Portal>

		<CharacterProfileCard></CharacterProfileCard>

		<section>
			<div class="py-8">
				<div class="relative max-w-3xl mx-auto text-center">
					<span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

					<h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-gray-50">Shop</h2>
				</div>

				<div class="grid grid-cols-2 mt-8 gap-x-4 gap-y-8">
					<a :key="character.id" class="relative block border border-gray-100 bg-white rounded shadow-sm" href="#" v-for="character in characters">
						<img :src="character.character_img" class="object-contain w-full h-56" loading="lazy" />

						<div class="p-6">
							<h5 class="mt-1 text-lg font-bold inline-flex items-center gap-2">
								<svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.75 9.25V6.5M19.25 6.5V10.5C19.25 10.9324 18.7796 11.3281 18 11.6335M19.25 6.5C19.25 7.4665 16.8995 8.25 14 8.25C11.1005 8.25 8.75 7.4665 8.75 6.5M19.25 6.5C19.25 5.5335 16.8995 4.75 14 4.75C11.1005 4.75 8.75 5.5335 8.75 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
									<path d="M15.25 13.5V17.5C15.25 18.4665 12.8995 19.25 10 19.25C7.10051 19.25 4.75 18.4665 4.75 17.5V13.5M15.25 13.5C15.25 14.4665 12.8995 15.25 10 15.25C7.10051 15.25 4.75 14.4665 4.75 13.5M15.25 13.5C15.25 12.5335 12.8995 11.75 10 11.75C7.10051 11.75 4.75 12.5335 4.75 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
								</svg>
								{{ character.price }}
							</h5>

							<p class="text-md text-gray-600">Race: {{ character.race }}</p>

							<button class="flex items-center justify-center w-full px-2 py-4 mt-4 bg-primary text-white rounded" name="add" type="button">
								<span class="text-sm font-medium">Purchase</span>

								<svg class="w-5 h-5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
								</svg>
							</button>
						</div>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>