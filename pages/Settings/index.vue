<template>
  <div class="overflow-y-scroll h-[32rem]">
    <div class="w-4/5 mt-5 container mx-auto">
      <p class="text-3xl text-slate-700 font-bold dark:text-white">Settings</p>
    </div>
    <div class="flex justify-between items-center p-5">
      <div>
        <div class="w-8 h-8 bg-secondary rounded-full ml-3"></div>
      </div>
      <p class="text-1xl dark:text-white mr-3">{{ user.username }}</p>
    </div>

    <div class="w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl float-none">
      <p class="text-white">Your Name</p>
      <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Username">
      <p class="text-white">Email</p>
      <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Password">
    </div>

    <div class="flex justify-between items-center p-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-3 dark:text-white">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <p class="text-2xl mr-3 dark:text-white">General</p>
    </div><br>

    <div class="w-4/5 p-5 -mt-8 mx-auto px-5 bg-slate-700 rounded-xl float-none">
      <p>hi</p>
      <p>hi</p>
    </div>

    <div class="flex justify-between items-center p-5">
      <svg class=" ml-3 dark:text-white" fill="none" height="50" viewBox="0 0 24 24" width="50">
        <path
          d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      </svg>
      <p class="text-2xl mr-3 dark:text-white">Archive</p>
    </div><br>

    <div class="w-4/5 p-5 -mt-8 mx-auto px-5 bg-slate-700 rounded-xl float-none">
      <p>hi</p>
      <p>hi</p>
      <p>hi</p>
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
        username: 'Heesu Kim'
      }
    }
  }
}
</script>
