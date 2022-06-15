<template>
    <div>
        <div class="w-4/5 container mx-auto">
            <p class="text-4xl text-black-500 font-bold">Register</p>
        </div>

        <div class="h-1/4 w-4/5 p-5 mx-auto px-5 bg-slate-700 rounded-xl mt-3 flex flex-col">
            <p class="text-white ml-2">Username</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Username">
            <p class="text-white ml-2">Email</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Email">
            <div>
                <p class="text-white float-left ml-2">First Name</p>
                <p class="text-white float-right mr-60">Last Name</p>
            </div>
            <div class="flex">
                <input type="text" class="bg-secondary w-full rounded-xl" placeholder="First Name">
                <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Last Name">
            </div>
            <p class="text-white ml-2">Password</p>
            <input type="text" class="bg-secondary w-full rounded-xl" placeholder="Password">
            
            <button class="mt-36 bg-secondary w-full rounded-xl float-bottom" @click="$router.push('/login')">
                <label class="ml-3"> Continue </label>
                <label class="float-right mr-3"> > </label>
            </button>
        </div>
    </div>
</template>