<template>
	<div class="mb-4">
		<label class="block text-sm font-medium text-gray-700" v-if="label">
			<span>{{ label }}</span>
		</label>

		<input :placeholder="placeholder" @input="handleInput" class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" type="text" />
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
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
