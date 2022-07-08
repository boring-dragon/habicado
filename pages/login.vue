<script>
import BreezeValidationErrors from "@/components/auth/validation-errors.vue";
import BreezeCheckbox from "@/components/auth/checkbox.vue";
import BreezeButton from "@/components/auth/button.vue";
import BreezeInput from "@/components/auth/input.vue";
import BreezeLabel from "@/components/auth/label.vue";
export default {
  head: {
    title: "Login",
  },

  layout: "guest",

  components: {
    BreezeValidationErrors,
    BreezeCheckbox,
    BreezeButton,
    BreezeInput,
    BreezeLabel,
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
      }
    },
  },
};
</script>
<template>
	<div>

		<BreezeValidationErrors :errors="form.errors" class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<BreezeLabel for="email" value="Email" />
				<BreezeInput autocomplete="username" autofocus class="mt-1 block w-full" id="email" placeholder="Your email.." required type="email" v-model="form.email" />
			</div>

			<div class="mt-4">
				<BreezeLabel for="password" value="Password" />
				<BreezeInput autocomplete="current-password" class="mt-1 block w-full" id="password" placeholder="Your password.." required type="password" v-model="form.password" />
			</div>

			<div class="flex items-center justify-center mt-4">
				<BreezeButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Log in</BreezeButton>
			</div>
		</form>
	</div>
</template>

