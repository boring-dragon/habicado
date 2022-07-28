<template>
	<div class="h-[32rem] sm:h-full p-5 space-y-8">
		<Portal to="header">
			<h2 class="text-3xl font-bold text-primary">Welcome Back 👋</h2>
			<p class="text-primary dark:text-white font-semibold">{{ $auth.user.full_name }}</p>
		</Portal>

		<div class="p-5 px-5 bg-yellow-200 float-none rounded-xl">
			<div>
				<div class="flex items-center justify-between">
					<p class="font-semibold text-xl">My Mood</p>

					<p class="font-semibold text-md underline">View mood history</p>
				</div>

				<p v-if="!moodChecked">What are your thoughts? What is your current mood?</p>
				<div class="space-y-4 mt-4">
					<p class="text-md" v-if="moodChecked">You have already taken your mood for today.</p>

					<button class="flex items-center justify-center px-8 py-4 font-bold transition bg-secondary border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50" v-if="moodChecked">
						<div class="flex items-center justify-center">
							<img :src="getCurrentMood.imgSrc" alt class="w-5 h-5" />
							<p class="ml-3">You are Feeling {{ getCurrentMood.mood }} Today!</p>
						</div>
					</button>
				</div>
			</div>

			<div class="space-y-4 mt-4" v-if="!moodChecked">
				<button :key="mood.mood" @click.prevent="addMood(mood.mood)" class="flex items-center w-full justify-center px-8 py-4 font-bold transition bg-secondary border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50" v-for="mood in moods">
					<div class="flex items-center justify-center">
						<img alt class="w-5 h-5" v-bind:src="mood.imgSrc" />
						<p class="ml-3">{{ mood.mood }}</p>
					</div>
				</button>
			</div>
		</div>

		<div class="p-5 px-4">
			<div>
				<div class="flex items-center justify-between">
					<p class="font-semibold text-xl">Habits</p>

					<p class="font-semibold text-md underline">see all</p>
				</div>
			</div>


		</div>

		<!---
		<div class="p-5 px-5 bg-secondary float-none rounded-xl">
			<div class="w-8 h-8 bg-primary rounded-full"></div>
			<p class="text-xs font-normal text-gray-500 mt-2">Character Profile</p>
			<div class="mb-1 text-base font-medium dark:text-black">Health</div>
			<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
				<div :style="{ 'width': user.health + '%' }" class="bg-gray-600 h-1.5 rounded-full dark:bg-red-300"></div>
			</div>
			<div class="mb-1 text-base font-medium dark:text-black">Stamina</div>
			<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
				<div :style="{ 'width': user.stamina + '%' }" class="bg-gray-600 h-1.5 rounded-full dark:bg-blue-300"></div>
			</div>
			<div class="mb-1 text-base font-medium dark:text-black">Strength</div>
			<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
				<div :style="{ 'width': user.strength + '%' }" class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300"></div>
			</div>
		</div>

		<div class="p-5 px-5 bg-secondary mt-3 rounded-xl space-y-2">
			<div class="flex items-center justify-between">
				<p>Your progress</p>
				<p>{{ parseInt(completedTasks/Object.keys(user.tasks).length*100) }}%</p>
			</div>
			<div>
				<p>{{ completedTasks }} of {{ Object.keys(user.tasks).length }} Completed</p>
				<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
					<div :style="{ 'width': completedTasks/Object.keys(user.tasks).length*100 + '%' }" class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300"></div>
				</div>
			</div>
		</div>

		<div class="mt-3">
			<div class="flex items-center justify-between">
				<p class="text-sm text-gray-700 dark:text-white">All Habits</p>
				<p class="text-sm text-gray-700 dark:text-white">see all</p>
			</div>

			<ul class="space-y-6 mt-3">
				<li :key="item.id" v-for="item in user.tasks">
					<div class="bg-slate-700 px-5 p-5 rounded-xl">
						<p class="text-white">{{ item.name }}</p>
						<p class="text-secondary">{{ item.done }} of {{ item.total }} completed</p>
					</div>
				</li>
			</ul>
		</div>
		-->
	</div>
</template>

<script>
import { capitalize } from "lodash";

export default {
  layout: "default",
  name: "IndexPage",
  data() {
    return {
      moods: [
        {
          mood: "Happy",
          imgSrc:
            "data:image/jpeg;base64,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",
        },
        {
          mood: "Sad",
          imgSrc:
            "data:image/png;base64,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",
        },
        {
          mood: "Angry",
          imgSrc:
            "data:image/jpeg;base64,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",
        },
      ],
      moodChecked: false,
      habbits: [],
      habbitTypes: [],
    };
  },
  computed: {
    completedTasks: function () {
      let i = 0;
      for (const [key, value] of Object.entries(this.user.tasks)) {
        if (value.total === value.done) {
          i++;
        }
      }
      return i;
    },

    getCurrentMood: function () {
      return this.moods.filter(
        (mood) => mood.mood === capitalize(this.$auth.user.current_mood)
      )[0];
    },

    sortHabbitsByStatus: function () {
      const sortedHabbits = [];
      this.habbits.forEach((key) => {
        if (key.status !== 0) {
          sortedHabbits.push(key);
        }
      });
      return sortedHabbits;
    },
  },

  mounted() {
    this.checkIfMoodChecked();
  },

  beforeMount() {
    this.getHabbits();
  },

  methods: {
    async addMood(mood) {
      this.$axios
        .post("/api/mood-checkings", { type: mood })
        .then((response) => {
          this.moodChecked = true;
        });
    },

    async checkIfMoodChecked() {
      this.$axios.get("/api/mood-checking").then((response) => {
        this.moodChecked = response.data.moodChecked;
      });
    },

    async getHabbits() {
      this.$axios.get("/api/getHabbits").then((response) => {
        this.habbits = response.data.data;
      });
    }
  },
};
</script>
