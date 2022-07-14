<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    classes() {
      switch (this.variant) {
        case 'warning':
          return ' text-yellow-800 bg-yellow-100';
          break;

        case 'success':
          return ' text-green-800 bg-green-100';
          break;

        case 'danger':
          return ' text-red-800 bg-red-100';
          break;

        default:
          return 'bg-gray-100 text-gray-900';
      }
    }
  },

}
</script>
<template>
  <span :class="classes" class="inline-flex px-2 text-xs font-semibold rounded-full leading-5">
    <slot />
  </span>
</template>
