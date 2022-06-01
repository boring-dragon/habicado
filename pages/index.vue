<template>
  <div>
    <div class="ml-9 mt-5">
      <p class="text-2xl text-black-500 font-bold">Welcome Back 👋</p>
      <p>{{ user.username }}</p>
      <img src="" alt="profile">
    </div>

    <div>
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

    <div>
      <p>Your progress</p>
      <p>{{ parseInt(completedTasks/Object.keys(user.tasks).length*100) }}%</p>
      <p> {{ completedTasks }} of {{ Object.keys(user.tasks).length }} Completed</p>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" :style="{ 'width': completedTasks/Object.keys(user.tasks).length*100 + '%' }"></div>
      </div>
    </div>

    <div>
      <div class="flex-1">
        <p>All Habits</p>
        <p>see all</p>
      </div>
      <li v-for="item in user.tasks">
        {{ item.name }}: {{ item.done }} of {{ item.total }} completed 
      </li>

    </div>

  </div>
</template>

<script>
export default {
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
