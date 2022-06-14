<template>
	<div class="overflow-y-scroll h-[36rem] p-5">
		<div class="mt-9">
			<div class="flex items-center justify-between">
				<p class="text-2xl text-black-500 font-bold">{{ currentTime.date }}, {{ currentTime.month }}, {{ currentTime.year }}</p>
				<svg fill="none" height="24" viewBox="0 0 24 24" width="24">
					<path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M8 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M16 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M7.75 10.75H16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
				</svg>
			</div>

			<div class="flex items-center gap-2 mt-5">
				<div class="w-32 h-18 bg-secondary rounded-lg p-3">
					<div class="text-right">
						{{ currentTime.day }}
						<br />
						{{ currentTime.date }}
					</div>
				</div>

                	<div class="w-32 h-18 bg-secondary rounded-lg p-3">
					<div class="text-right">
						{{ currentTime.day }}
						<br />
						{{ currentTime.date }}
					</div>
				</div>
			</div>
		</div>

		<div class="w-4/5 p-5 container mx-auto px-5 bg-slate-700 mt-3 rounded-xl p-12">
			<center>
				<v-simple-calendar :infinite="infinite" :maxDate="new Date('2021-04-25')" :minDate="new Date('2021-01-03')" :type="type" :value="selectedRange" :weekdayFormat="'cccccc'" @change="changeValue" class="text-white" v-if="active">
					<template v-slot:day-inside="{ day, formatDay }">{{ formatDay(day.date) }}</template>
				</v-simple-calendar>
			</center>
		</div>

		<div class="w-4/5 p-5 container mx-auto px-5 bg-secondary mt-3 rounded-xl">
			<p class="float-left">Your progress</p>
			<p class="float-right">60%</p>
			<br />
			<p>2 of 5 Completed</p>
			<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
				<div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300"></div>
			</div>
		</div>
	</div>
</template>
<script>
import VSimpleCalendar from "@romanran/vue-simple-calendar";
import "@romanran/vue-simple-calendar/dist/vue-simple-calendar.css";
export default {
  components: {
    VSimpleCalendar,
  },
  data() {
    return {
      // VSimpleCalendar variables
      selectedRange: null,
      type: "single",
      active: true,
      infinite: false,

      currentTime: {
        year: "2022",
        month: "June",
        date: "03",
        day: "Fri",
        hour: "3",
        min: "37",
        second: "23",
      },
      user: {
        username: "Heesu Kim",
      },
    };
  },
  methods: {
    // VSimpleCalendar methods
    changeValue(value) {
      this.selectedRange = value;
    },
  },
};
</script>