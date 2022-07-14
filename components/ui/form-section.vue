<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <form-section-title>
      <template #title><slot name="title"></slot></template>
      <template #description><slot name="description"></slot></template>
    </form-section-title>

    <div class="mt-5 md:mt-0 md:col-span-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import FormSectionTitle from './form-section-title'

export default {
  components: {
    FormSectionTitle,
  },
}
</script>

