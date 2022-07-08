<template>
	<div v-if="errors.length > 0">
		<div class="font-medium text-red-600">Whoops! Something went wrong.</div>

		<ul class="mt-3 list-disc list-inside text-sm text-red-600">
			<li :key="key" v-for="(error, key) in errors">{{ error }}</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: ["errors"],
};
</script>
