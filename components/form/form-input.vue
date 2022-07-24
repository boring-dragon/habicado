<template>
	<div>
		<label class="block text-sm font-medium text-gray-700 mb-2" v-if="label">
			<span>{{ label }}</span>
		</label>

		<input :type="type" :placeholder="placeholder" @input="handleInput" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
		<div v-if="error">
			<p class="mt-2 text-sm text-red-600">{{ error }}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "FormInput",

  props: {
    label: String,
    placeholder: String,
    error: String,
    type: {
      type: String,
      default: "text",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
