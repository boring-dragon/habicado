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
		<label class="block text-sm font-medium text-gray-700" v-if="label">
			<span>{{ label }}</span>
		</label>
		<select @change="$emit('input', $event.target.value)" class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 form-select leading-6 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 rounded">
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

