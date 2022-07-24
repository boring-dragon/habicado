<script>
import CharacterProfileCard from './partials/CharacterProfileCard.vue';
export default {
    components: {
        CharacterProfileCard
    }
};  
</script>
<template>
    <div class="overflow-y-scroll max-w-screen-xl px-4 py-12 mx-auto space-y-8">
      


        <CharacterProfileCard></CharacterProfileCard>
        

        <div class="flex justify-between items-center -mt-12">
            <svg class="inline-block mb-1 dark:text-white ml-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
            </svg>
            <p class="text-2xl mr-3 dark:text-white">Shop</p>
        </div>

        <div class="-mt-8">
            <div class="flex items-center gap-2 mt-5">
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
            </div>

            <div class="flex items-center gap-2 mt-5">
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
            </div>

            <div class="flex items-center gap-2 mt-5">
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
            </div>

            <div class="flex items-center gap-2 mt-5">
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
                <div class="w-1/4 h-18 bg-secondary rounded-lg p-3"></div>
            </div>
        </div>


    </div>
</template>