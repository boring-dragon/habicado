<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700" v-if="label">
      <span>{{ label }}</span>
    </label>

    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <flatpickr
        class="block w-full pl-10 form-input sm:text-sm sm:leading-5 border-gray-300"
        :value="value"
        :config="options"
        v-on="$listeners"
        ref="input"
      />
    </div>

    <div v-if="error">
      <p class="mt-2 text-sm text-red-600">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: {
    value: String,
    label: String,
    error: String,
    config: Object,
    required: {
      default: 'required',
    },
  },

  components: {
    Flatpickr,
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    }
  },

  computed: {
    options() {
      return _.defaults(this.config, {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: 'd/m/Y',
        altInput: true,
        dateFormat: 'Y-m-d',
      })
    }
  },
}
</script>
