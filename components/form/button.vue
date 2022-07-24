<script>
export default {
  props: {
    variant: String,
    tag: {
      type: String,
      default: "button",
    },
    href: String,
  },

  computed: {
    classes() {
      switch (this.variant) {
        case "danger":
          return "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150";
          break;
        case "secondary":
          return "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150";
          break;
        case "warning":
          return "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";
          break;
        case "primary":
          return "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";
          break;
        default:
          return "inline-flex items-center justify-center px-8 py-2 text-sm font-medium text-primary bg-secondary border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
          break;
      }
    },
  },
};
</script>
<template>
	<component :class="classes" :href="href" :is="tag">
		<slot></slot>
	</component>
</template>
