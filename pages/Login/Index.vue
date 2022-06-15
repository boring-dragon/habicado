<template>
    <div>
        <div class="w-4/5 container mx-auto">
            <p class="text-4xl text-black-500 font-bold">Login</p>
        </div>

        <div class="h-1/4 w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl mt-3 flex flex-col">
            <p class="text-white">Username</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Username">
            <p class="text-white">Password</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Password">
            <button class="mt-36 bg-secondary w-full rounded-xl float-bottom" @click="$router.push('/home')">
                <label class="ml-3"> Continue </label>
                <label class="float-right mr-3"> > </label>
            </button>
        </div>
    </div>
</template>