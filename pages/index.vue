<template>
  <div>
    <div class="w-4/5 container mx-auto">
      <center>
        <p class="text-2xl text-black-500  dark:text-white p-3"> Let's Get Started </p>
      </center>
    </div>

    <div class="h-[28rem] w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl mt-3 flex flex-col">
      <center>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M78 0H50C22.3858 0 0 22.3858 0 50V78C0 105.614 22.3858 128 50 128H78C105.614 128 128 105.614 128 78V50C128 22.3858 105.614 0 78 0Z"
            fill="#EAFBB1" />
          <path
            d="M64 101.5C84.7107 101.5 101.5 84.7107 101.5 64C101.5 43.2893 84.7107 26.5 64 26.5C43.2893 26.5 26.5 43.2893 26.5 64C26.5 84.7107 43.2893 101.5 64 101.5Z"
            stroke="#759679" stroke-width="10" stroke-miterlimit="10" />
          <path d="M45.25 71.495C50.615 81.54 56.115 82.52 57.4 82.68C66.92 83.87 79.15 69.58 82.75 45.25"
            stroke="#003333" stroke-width="10" stroke-miterlimit="10" />
        </svg>
        <p class="text-2xl text-secondary mt-3"> Welcome <br> To <br> Habicado </p>
        <button class="mt-36 bg-secondary w-full rounded-xl float-bottom" @click="$router.push('/register')">
          <label class="ml-3"> Continue </label>
          <label class="float-right mr-3"> > </label>
        </button>
      </center>
    </div>
  </div>
</template>
