<script>
export default {
  props: {
    variant: {
      type: String,
      default: "default",
    },
  },

  computed: {
    hasTitle() {
      return !!this.$slots.title;
    },

    hasBody() {
      return !!this.$slots.body;
    },

    hasFooter() {
      return !!this.$slots.footer;
    },

    cardClasses() {
      switch (this.variant) {
        case "warning":
          return "bg-yellow-200";
          break;

        case "success":
          return "bg-green-200";
          break;

        case "danger":
          return "bg-red-200";
          break;

        default:
          return "bg-white";
      }
    },

    titleClasses() {
      switch (this.variant) {
        case "warning":
          return "text-yellow-900";
          break;

        case "success":
          return "text-green-900";
          break;

        case "danger":
          return "text-red-900";
          break;

        default:
          return "text-gray-900";
      }
    },

    subTitleClasses() {
      switch (this.variant) {
        case "warning":
          return "text-yellow-500";
          break;

        case "success":
          return "text-green-500";
          break;

        case "danger":
          return "text-red-500";
          break;

        default:
          return "text-gray-500";
      }
    },
  },
};
</script>

<template>
	<div :class="cardClasses" class="shadow sm:rounded-lg">
		<div class="px-4 py-5 sm:px-6" v-if="hasTitle">
			<h3 :class="titleClasses" class="text-lg font-medium leading-6">
				<slot name="title" />
			</h3>
			<p :class="subTitleClasses" class="mt-1 text-sm leading-5">
				<slot name="subtitle" />
			</p>
		</div>

		<div class="px-4 py-5 sm:px-6" v-if="hasBody">
			<slot name="body" />
		</div>

		<slot />

		<div class="flex items-center justify-end px-4 py-3 text-right bg-gray-50 sm:px-6" v-if="hasFooter">
			<slot name="footer"></slot>
		</div>
	</div>
</template>