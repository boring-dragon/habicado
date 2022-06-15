<template>
    <div>
      <div class="w-4/5 container mx-auto mt-3">
        <center>
          <p class="text-2xl text-black-500 font-bold"> Let's Get Started </p>
        </center>
      </div>

      <div class="h-4/5 w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl mt-3 flex flex-col">
        <center>
          <img src="" alt="logo">
          <p class="text-secondary mt-3"> Welcome <br> To <br> Habicado </p>
          <button class="mt-36 bg-secondary w-full rounded-xl float-bottom" @click="$router.push('/register')">
            <label class="ml-3"> Continue </label>
            <label class="float-right mr-3"> > </label>
          </button>
        </center>
      </div>
    </div>
</template>

<script>

export default {

}
</script>
