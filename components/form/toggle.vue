<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: Boolean,
    label: String,
    error: String,
    required: {
      default: 'required',
    },
  },
}
</script>
<template>
  <div>
    <label class="block text-sm font-medium text-gray-700" v-if="label">
      <span>{{ label }}</span>
    </label>
    <span @click="$emit('input', !value)" role="checkbox" tabindex="0" aria-checked="false" class="relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 cursor-pointer group focus:outline-none">
      <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
      <span aria-hidden="true" :class="{'bg-info': value}" class="absolute h-4 mx-auto bg-gray-200 rounded-full w-9 transition-colors ease-in-out duration-200"></span>
      <!-- On: "translate-x-5", Off: "translate-x-0" -->
      <span aria-hidden="true" :class="value ? 'translate-x-5' : 'translate-x-0'" class="absolute left-0 inline-block w-5 h-5 bg-white border border-gray-200 rounded-full shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200"></span>
    </span>
    <div v-if="error">
      <p class="mt-2 text-sm text-red-600">
      {{ error }}
      </p>
    </div>
  </div>
</template>
