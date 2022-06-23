<template>
    <div class="overflow-y-scroll h-[36rem] mt-5">
        <div class="w-4/5 container mx-auto">
            <p class="text-4xl text-black-500 font-bold">Settings</p>
        </div>
        <div class="w-2/5 p-5 mx-auto px-5 float-none">
            <img src="" alt="profile" class="float-left">
            <p class="float-right text-2xl">{{ user.username }}</p>
        </div><br>

        <div class="w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl float-none">
            <p class="text-white">Your Name</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Username">
            <p class="text-white">Email</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Password">
        </div>

        <div class="w-2/5 p-5 mx-auto px-5 float-none">
            <img src="" alt="general" class="float-left">
            <p class="float-right text-2xl">General</p>
        </div><br>

        <div class="w-4/5 p-5 h-96 mx-auto px-5 bg-slate-700 rounded-xl float-none">

        </div>

        <div class="w-2/5 p-5 mx-auto px-5 float-none">
            <img src="" alt="archive" class="float-left">
            <p class="float-right text-2xl">Archive</p>
        </div><br>

        <div class="w-4/5 p-5 h-96 mx-auto px-5 bg-slate-700 rounded-xl float-none">

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
