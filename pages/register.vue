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
      registerDone: false,
    };
  },

  methods: {
    async submit() {
      this.form.processing = true;
      this.form.errors = [];

      try {
        await this.$axios.get("/sanctum/csrf-cookie");

        await this.$axios.post("register", this.form);

        this.registerDone = true;
        this.form.processing = false;

        this.form.first_name = "";
        this.form.last_name = "";
        this.form.email = "";
        this.form.password = "";
        this.form.password_confirmation = "";

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
		<div class="rounded-md bg-green-50 p-4 my-4" v-if="registerDone">
			<div class="flex">
				<div class="flex-shrink-0">
					<svg aria-hidden="true" class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd" />
					</svg>
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-green-800">Registeration completed completed</h3>
					<div class="mt-2 text-sm text-green-700">
						<p>Please login to continue</p>
					</div>
					<div class="mt-4">
						<div class="-mx-2 -my-1.5 flex">
							<NuxtLink class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600" to="/login">Login</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Validation Errors -->
		<FormValidationErrors :errors="form.errors" class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<FormLabel for="first_name" value="First Name" />
				<FormInput autofocus class="input mt-1 block w-full" id="first_name" required type="text" v-model="form.first_name" />
			</div>

			<div class="mt-4">
				<FormLabel for="last_name" value="Last Name" />
				<FormInput autofocus class="input mt-1 block w-full" id="last_name" required type="text" v-model="form.last_name" />
			</div>

			<div class="mt-4">
				<FormLabel for="email" value="Email" />
				<FormInput autocomplete="username" class="mt-1 block w-full" id="email" required type="email" v-model="form.email" />
			</div>

			<div class="mt-4">
				<FormLabel for="password" value="Password" />
				<FormInput class="mt-1 block w-full" id="password" required type="password" v-model="form.password" />
			</div>

			<div class="mt-4">
				<FormLabel for="password_confirmation" value="Confirm Password" />
				<FormInput class="mt-1 block w-full" id="password_confirmation" required type="password" v-model="form.password_confirmation" />
			</div>

			<div class="flex items-center justify-end mt-4">
				<NuxtLink class="underline text-sm text-gray-600 hover:text-gray-900" to="/login">Already registered?</NuxtLink>

				<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Register</FormButton>
			</div>
		</form>
	</div>
</template>

