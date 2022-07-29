<script>
import FormButton from "@/components/form/button.vue";
import FormInput from "@/components/form/form-input.vue";
import FormTextarea from "@/components/form/textarea.vue";
import FormToggle from "@/components/form/toggle.vue";
import DarkModeToggle from "@/components/form/dark-mode-toggle.vue";

const Cookie = require("js-cookie");

export default {
  components: {
    FormButton,
    FormInput,
    FormToggle
  },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        password: "",
        darkMode: false,
		notification: false,
        errors: [],
      },
    };
  },

  mounted() {
    this.$axios.get("/api/getUserDetails").then((response) => {
      this.form.firstName = response.data.data.first_name;
      this.form.lastName = response.data.data.last_name;
      this.form.bio = response.data.data.bio;
      this.form.email = response.data.data.email;
    });
  },

  methods: {
    logout() {
      this.$auth.logout();
    },

    submit() {
      this.form.errors = [];
      this.$axios
        .put("/api/saveUserDetails", {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          bio: this.form.bio,
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          this.$toast.success("User Information Updated!");
        })
        .catch((e) => {
          Object.keys(e.response.data.errors).forEach((key) => {
            Object.values(e.response.data.errors[key]).forEach((error) => {
              this.form.errors.push(error);
            });
          });
        });
    },

    deleteAccount() {
      this.$axios.delete("/api/deleteAccount").then((response) => {
        this.$auth.logout();
      });
    },
  },
};
</script>
<template>
	<div class="overflow-y-scroll py-12 mx-auto space-y-8 px-4">
		<Portal to="header">
			<h2 class="text-3xl font-bold text-primary">Settings</h2>
		</Portal>

		<div class="bg-white p-4 rounded-lg shadow-md">
			<h3 class="text-center text-xl font-semibold mb-6">Profile Informations</h3>

			<FormValidationErrors :errors="form.errors" class="mb-4" />
			<form @submit.prevent="submit">
				<div>
					<FormInput label="First name" placeholder="Your first name.." required v-model="form.firstName" />
				</div>

				<div class="mt-4">
					<FormInput label="Last name" placeholder="Your last name.." required v-model="form.lastName" />
				</div>

				<div class="mt-4">
					<FormTextarea label="Bio" placeholder="Your bio.." required v-model="form.bio" />
				</div>

				<div class="mt-4">
					<FormInput label="Email" placeholder="Your email.." required v-model="form.email" />
				</div>

				<div class="mt-4">
					<FormInput label="Password" placeholder="Your password.." required v-model="form.password" />
				</div>

				<div class="flex items-center justify-center mt-4">
					<FormButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="ml-4">Save</FormButton>
				</div>
			</form>
		</div>

		<div class="bg-white p-4 rounded-lg shadow-md">
			<h3 class="text-center text-xl font-semibold mb-6">General Settings</h3>

			<form class="px-4 space-y-6">
				<div class="flex items-center justify-between gap-2">
					<label class="block text-sm font-medium text-gray-700">Dark Mode</label>
					<DarkModeToggle></DarkModeToggle>
				</div>

				<div class="flex items-center justify-between gap-2">
					<label class="block text-sm font-medium text-gray-700">Notification</label>
					<FormToggle v-model="form.notification"></FormToggle>
				</div>
			</form>
		</div>

		<div class="p-4 rounded-lg">
			<h3 class="text-center text-xl font-semibold mb-6">Danger Zone</h3>

			<div class="space-y-6">
				<div class="bg-white shadow-lg rounded-lg">
					<div class="px-4 py-5 sm:p-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Logout From your account</h3>
						<div class="mt-2 max-w-xl text-sm text-gray-500">
							<p>Once you logout your account, your session will expire</p>
						</div>
						<div class="mt-5">
							<form @submit.prevent="logout()">
								<FormButton variant="secondary">Logout</FormButton>
							</form>
						</div>
					</div>
				</div>

				<div class="bg-white shadow-lg rounded-lg">
					<div class="px-4 py-5 sm:p-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Delete your account</h3>
						<div class="mt-2 max-w-xl text-sm text-gray-500">
							<p>Once you delete your account, you will lose all data associated with it.</p>
						</div>
						<div class="mt-5">
							<form @submit.prevent="deleteAccount()">
								<FormButton class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" variant="secondary">Delete account</FormButton>
								<!-- <button class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" type="button">Delete account</button> -->
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

