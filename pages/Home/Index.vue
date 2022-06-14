<template>
	<div class="overflow-y-scroll h-[36rem] sm:h-full mt-5 p-5 space-y-8">
		<div class="flex justify-between items-center">
			<div>
				<p class="text-2xl text-black-500 font-bold">Welcome Back 👋</p>
				<p>{{ user.username }}</p>
			</div>
			<div>
				<div class="w-8 h-8 bg-secondary rounded-full"></div>
			</div>
		</div>

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
				<p class="text-sm text-gray-700">All Habits</p>
				<p class="text-sm text-gray-700">see all</p>
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
	</div>
</template>

<script>
export default {
  layout: "default",
  name: "IndexPage",
  data() {
    return {
      user: {
        username: "Heesu Kim",
        health: 50,
        stamina: 40,
        strength: 30,
        tasks: [
          {
            id: 1,
            name: "Quit Smoking",
            total: 5,
            done: 3,
          },
          {
            id: 2,
            name: "Eat Healthy",
            total: 5,
            done: 5,
          },
          {
            id: 3,
            name: "Avoid Icecream",
            total: 5,
            done: 1,
          },
        ],
      },
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
  },
};
</script>
