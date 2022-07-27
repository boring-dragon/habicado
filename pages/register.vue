<script>
import FormValidationErrors from "@/components/form/validation-errors.vue";
import FormButton from "@/components/form/button.vue";
import FormInput from "@/components/form/form-input.vue";
import FormLabel from "@/components/form/label.vue";
export default {
  head: {
    title: "Register",
  },
  auth: "guest",

  layout: "guest",

  components: {
    FormValidationErrors,
    FormButton,
    FormInput,
    FormLabel,
  },

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
        processing: false,
        errors: [],
      },
    };
  },

  methods: {
    async submit() {
      this.form.processing = true;
      this.form.errors = [];

      try {
        await this.$axios.get("/sanctum/csrf-cookie");

        await this.$axios.post("register", this.form);

        await this.$auth.loginWith("laravelSanctum", { data: this.form });

        this.form.processing = false;
      } catch (e) {
        Object.keys(e.response.data.errors).forEach((key) => {
          Object.values(e.response.data.errors[key]).forEach((error) => {
            this.form.errors.push(error);
          });
        });

        this.form.processing = false;
      }
    },
  },
};
</script>

<template>
	<div>
		<!-- Validation Errors -->
		<FormValidationErrors :errors="form.errors" class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<FormLabel for="first_name" value="First Name" />
				<FormInput autocomplete="first_name" autofocus class="input mt-1 block w-full" id="first_name" required type="text" v-model="form.first_name" />
			</div>

      <div class="mt-4">
				<FormLabel for="last_name" value="Last Name" />
				<FormInput autocomplete="last_name" autofocus class="input mt-1 block w-full" id="last_name" required type="text" v-model="form.last_name" />
			</div>

			<div class="mt-4">
				<FormLabel for="email" value="Email" />
				<FormInput autocomplete="username" class="mt-1 block w-full" id="email" required type="email" v-model="form.email" />
			</div>

			<div class="mt-4">
				<FormLabel for="password" value="Password" />
				<FormInput autocomplete="new-password" class="mt-1 block w-full" id="password" required type="password" v-model="form.password" />
			</div>

			<div class="mt-4">
				<FormLabel for="password_confirmation" value="Confirm Password" />
				<FormInput autocomplete="new-password" class="mt-1 block w-full" id="password_confirmation" required type="password" v-model="form.password_confirmation" />
			</div>

			<div class="flex items-center justify-end mt-4">
				<NuxtLink class="underline text-sm text-gray-600 hover:text-gray-900" to="/login">Already registered?</NuxtLink>

				<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Register</FormButton>
			</div>
		</form>
	</div>
</template>

