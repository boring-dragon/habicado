<script>
import FormButton from "@/components/form/button.vue";
import FormInput from "@/components/form/form-input.vue";
import FormToggle from "@/components/form/toggle.vue";
export default {
  components: {
    FormButton,
    FormInput,
    FormToggle,
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        darkMode: false,
        errors: [],
      },
    };
  },
};
</script>
<template>
	<div class="overflow-y-scroll max-w-screen-xl px-4 py-12 mx-auto space-y-6">
		<h2 class="text-4xl font-bold text-primary">Settings</h2>
    

		<div class="bg-white p-4 rounded-lg shadow-md">
			<FormValidationErrors :errors="form.errors" class="mb-4" />

			<h3 class="text-center text-xl font-semibold mb-6">Profile Informations</h3>

			<form @submit.prevent="submit">
				<div>
					<FormInput label="Name" placeholder="Your name.." required v-model="form.name" />
				</div>

				<div class="mt-4">
					<FormInput label="Email" placeholder="Your email.." required v-model="form.email" />
				</div>

				<div class="flex items-center justify-center mt-4">
					<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Log in</FormButton>
				</div>
			</form>
		</div>

		<div class="bg-white p-4 rounded-lg shadow-md">
			<h3 class="text-center text-xl font-semibold mb-6">General Settings</h3>

			<form class="px-4 space-y-6">
				<div class="flex items-center justify-between gap-2">
					<label class="block text-sm font-medium text-gray-700">Dark Mode</label>
					<FormToggle v-model="form.darkMode"></FormToggle>
				</div>

				<div class="flex items-center justify-between gap-2">
					<label class="block text-sm font-medium text-gray-700">Notification</label>
					<FormToggle v-model="form.darkMode"></FormToggle>
				</div>
			</form>
		</div>

		<div class="bg-white p-4 rounded-lg shadow-md">
			<h3 class="text-center text-xl font-semibold mb-6">Danger Zone</h3>

			<form class="px-6 space-y-6">
				<div class="flex items-center justify-center mt-4">
					<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" variant="danger">Delete Account</FormButton>
				</div>
			</form>
		</div>
	</div>
</template>

