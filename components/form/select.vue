<script>
import { isArray, isObject, each, map } from 'lodash';
export default {
  props: {
    value: false,
    label: String,
    error: String,
    options: {
      required: true,
    },
    required: {
      default: "required",
    },
  },

  computed: {
    parsedOptions() {
      if (isArray(this.options)) {
        return map(this.options, (option) => {
          return { label: option.label, value: option.value };
        });
      }

      if (isObject(this.options)) {
        let parsed = [];

        each(this.options, (label, value) => {
          parsed.push({ label, value });
        });

        return parsed;
      }
    },
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
		<select @change="$emit('input', $event.target.value)" class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
			<option value></option>
			<template v-for="option in parsedOptions">
				<option :key="option.value" :selected="option.value == value" :value="option.value">{{ option.label }}</option>
			</template>
		</select>

		<div v-if="error">
			<p class="mt-2 text-sm text-red-600">{{ error }}</p>
		</div>
	</div>
</template>

