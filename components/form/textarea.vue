<script>
export default {
  name: "FormTextarea",
  props: {
    rows: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<template>
    <textarea @input="handleInput" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" :rows="rows"></textarea>
</template>