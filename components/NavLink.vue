<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },

    to: {
      type: String,
      required: true,
    }
  },
};
</script>

<template>
	<NuxtLink :class="active ? 'text-white bg-primary': 'text-primary'" class="w-full justify-center inline-block text-center pt-2 pb-1 rounded-lg" :to="to">
	
		<slot name="icon"></slot>

		<span class="block text-xs">{{ name }}</span>
	</NuxtLink>
</template>