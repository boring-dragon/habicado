<template>
  <div class="overflow-y-scroll h-[36rem] mt-5">
    <div class="w-4/5 container mx-auto">
      <div class="float-left">
        <p class="text-2xl text-black-500 font-bold">Welcome Back 👋</p>
        <p>{{ user.username }}</p>
      </div>
      <div class="float-right">
        <img src="" alt="profile">
      </div>
    </div><br><br><br>

    <div class="w-4/5 p-5 mx-auto px-5 bg-secondary float-none rounded-xl">
      <img src="" alt="profile">
      <p>Character Profile</p>
      <div class="mb-1 text-base font-medium dark:text-black">Health</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-red-300" :style="{ 'width': user.health + '%' }"></div>
      </div>
      <div class="mb-1 text-base font-medium dark:text-black">Stamina</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-blue-300" :style="{ 'width': user.stamina + '%' }"></div>
      </div>
      <div class="mb-1 text-base font-medium dark:text-black">Strength</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" :style="{ 'width': user.strength + '%' }"></div>
      </div>
    </div>

    <div class="w-4/5 p-5 container mx-auto px-5 bg-secondary mt-3 rounded-xl">
      <p class="float-left">Your progress</p>
      <p class="float-right">{{ parseInt(completedTasks/Object.keys(user.tasks).length*100) }}%</p><br>
      <p> {{ completedTasks }} of {{ Object.keys(user.tasks).length }} Completed</p>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" :style="{ 'width': completedTasks/Object.keys(user.tasks).length*100 + '%' }"></div>
      </div>
    </div>

    <div class="w-4/5 container mx-auto mt-3">
      <p class="float-left">All Habits</p>
      <p class="float-right">see all</p><br>
      <ol>
        <li v-for="item in user.tasks">
          <div class="bg-slate-700 px-5 p-5 rounded-xl">
            <p class="text-white">{{ item.name }}</p>
            <p class="text-secondary">{{ item.done }} of {{ item.total }} completed</p>
          </div><br>
        </li>
      </ol>
    </div>

  </div>
</template>

<script>

export default {
  layout: 'default',
  name: 'IndexPage',
  data() {
    return {
      user: {
        username: 'Heesu Kim',
        health: 50,
        stamina: 40,
        strength: 30,
        tasks: {
          'Quit Smoking': {
            name: 'Quit Smoking',
            total: 5,
            done: 3
          },
          'Eat Healthy': {
            name: 'Eat Healthy',
            total: 5,
            done: 5
          },
          'Avoid Icecream': {
            name: 'Avoid Icecream',
            total: 5,
            done: 1
          }
        }
      }
    }
  },
  computed: {
    completedTasks: function () {
      let i = 0
      for (const [key, value] of Object.entries(this.user.tasks)) {
        if (value.total === value.done) {
          i++
        }
      }
      return i
    }
  }
}
</script>
