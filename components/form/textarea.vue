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
		<label class="block text-sm font-medium text-gray-700" v-if="label">
			<span>{{ label }}</span>
		</label>
		<textarea :rows="rows" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" class="w-full mt-1 form-input rounded-md shadow-sm sm:text-sm sm:leading-5" ref="input"></textarea>
		<div v-if="error">
			<p class="mt-2 text-sm text-red-600">{{ error }}</p>
		</div>
	</div>
</template>
