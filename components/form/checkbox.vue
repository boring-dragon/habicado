<template>
<div class="mb-4">
		<label class="block text-sm font-medium text-gray-700" v-if="label">
			<span>{{ label }}</span>
		</label>
	<input :value="value" class="rounded border-gray-300 text-info shadow-sm focus:border-indigo-300 focus:ring focus:ring-info focus:ring-opacity-50" type="checkbox" v-model="proxyChecked" />
	<div v-if="error">
			<p class="mt-2 text-sm text-red-600">{{ error }}</p>
		</div>
</div>
</template>

<script>
export default {
  emits: ["update:checked"],
  props: {
    checked: {
      type: [Array, Boolean],
      default: false,
    },
    value: {
      default: null,
    },
     label: String,
  },
  computed: {
    proxyChecked: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("update:checked", val);
      },
    },
  },
};
</script>