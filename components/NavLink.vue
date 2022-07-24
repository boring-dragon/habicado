<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
	<NuxtLink :class="active ? 'text-white bg-primary': 'text-primary'" :to="to" class="group relative min-w-0 flex-1 bg-secondary py-4 px-4 hover:text-white text-sm font-medium text-center overflow-hidden hover:bg-primary focus:z-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400 rounded-lg">
		<slot name="icon"></slot>

		<span class="block text-xs">{{ name }}</span>
	</NuxtLink>
</template>