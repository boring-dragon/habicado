<template>
  <div>
    <div class="ml-9 mt-5">
      <p class="text-2xl text-black-500 font-bold">Welcome Back 👋</p>
      <p>{{ username }}</p>
      <img src="" alt="profile">
    </div>

    <div>
      <img src="" alt="profile">
      <p>Character Profile</p>
      <div class="mb-1 text-base font-medium dark:text-black">Health</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-red-300" style="width: 45%"></div>
      </div>
      <div class="mb-1 text-base font-medium dark:text-black">Stamina</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-blue-300" style="width: 45%"></div>
      </div>
      <div class="mb-1 text-base font-medium dark:text-black">Strength</div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" style="width: 45%"></div>
      </div>
    </div>

    <div>
      <p>Your progress</p>
      <p>{{ DoneTasks }} of {{ TotalTasks }} Completed</p>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
        <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" style="width: 45%"></div>
      </div>
    </div>

    <div>
      <div class="flex-1">
        <p>All Habits</p>
        <p>see all</p>
      </div>
      <div>
        <p>{{ habit1 }}</p>
        <p>{{ habit1Done }} of {{ habit1Total }} Completed</p>
      </div>
      <div>
        <p>{{ habit2 }}</p>
        <p>{{ habit2Done }} of {{ habit2Total }} Completed</p>
      </div>
      <div>
        <p>{{ habit3 }}</p>
        <p>{{ habit3Done }} of {{ habit3Total }} Completed</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      username: 'Heesu Kim',
      DoneTasks: 1,
      TotalTasks: 5,
      habit1: 'Quit Smoking',
      habit1Done: 1,
      habit1Total: 5,
      habit2: 'Eat Healthy',
      habit2Done: 2,
      habit2Total: 5,
      habit3: 'Avoid Icecream',
      habit3Done: 1,
      habit3Total: 5,
    }
  }
}
</script>
