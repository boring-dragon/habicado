<template>
	<div class="relative">
		<div @click="open = !open">
			<slot name="trigger" />
		</div>

		<!-- Full Screen Dropdown Overlay -->
		<div @click="open = false" class="fixed inset-0 z-40" v-show="open"></div>

		<transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
			<div :class="[widthClass, alignmentClasses]" @click="open = false" class="absolute z-50 mt-2 rounded-md shadow-lg" style="display: none" v-show="open">
				<div :class="contentClasses" class="rounded-md ring-1 ring-black ring-opacity-5">
					<slot name="content" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
  props: {
    align: {
      default: "right",
    },
    width: {
      default: "48",
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"],
    },
  },
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.closeOnEscape);
  },
  methods: {
    closeOnEscape(e) {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    },
  },
  computed: {
    widthClass() {
      return {
        48: "w-48",
      }[this.width.toString()];
    },
    alignmentClasses() {
      if (this.align === "left") {
        return "origin-top-left left-0";
      } else if (this.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    },
  },
};
</script>