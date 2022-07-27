<script>
import FormValidationErrors from "@/components/form/validation-errors.vue";
import FormCheckbox from "@/components/form/checkbox.vue";
import FormButton from "@/components/form/button.vue";
import FormInput from "@/components/form/form-input.vue";
import FormLabel from "@/components/form/label.vue";
export default {
  head: {
    title: "Login",
  },

  layout: "guest",

  components: {
    FormValidationErrors,
    FormCheckbox,
    FormButton,
    FormInput,
    FormLabel,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
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

		<FormValidationErrors :errors="form.errors" class="mb-4" />

		<form @submit.prevent="submit">
			<div>

				<FormInput label="Email" placeholder="Your email.." v-model="form.email" required />
			</div>

			<div class="mt-4">
				<FormInput label="Password" autocomplete="current-password" class="mt-1 block w-full" id="password" placeholder="Your password.." required type="password" v-model="form.password" />
			</div>

			<div class="flex items-center justify-center mt-4">
				<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Log in</FormButton>
			</div>
		</form>
	</div>
</template>

