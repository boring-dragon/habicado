<script>
export default {
  props: {
    value: {
      default: "",
    },
    label: String,
    error: String,
    required: {
      default: "required",
    },
    rows: {
      default: "5",
    },
    placeholder: String,
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>

<template>
	<div class="mb-4">
		<label class="block text-sm font-medium text-gray-700 mb-2" v-if="label">
			<span>{{ label }}</span>
		</label>
		<textarea :rows="rows" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" ref="input"></textarea>
		<div v-if="error">
			<p class="mt-2 text-sm text-red-600">{{ error }}</p>
		</div>
	</div>
</template>
