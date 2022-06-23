<template>
    <div>
        <div class="w-4/5 container mx-auto">
            <p class="text-2xl text-black-500 dark:text-white p-3"> Register </p>
        </div>

        <div class="h-[28rem] w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl mt-3 flex flex-col">
            <p class=" text-emerald-200 text-xs">Username</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Username">
            <p class="text-emerald-200 text-xs">Email</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Email">
            <div class="flex items-center justify-between">
                <p class=" text-emerald-200 text-xs">First Name</p>
                <p class=" text-emerald-200 text-xs">Last Name</p>
            </div>
            <div class="flex items-center justify-between">
                <input type="text" class="bg-secondary w-full rounded-xl" placeholder="First Name">
                <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Last Name">
            </div>
            <p class=" text-emerald-200 text-xs">Password</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Password">

            <button class="mt-12 bg-secondary w-full rounded-xl float-bottom" @click="$router.push('/login')">
                <label class="ml-3"> Continue </label>
                <label class="float-right mr-3"> > </label>
            </button>
        </div>
    </div>
</template>
