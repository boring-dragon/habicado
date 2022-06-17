<script>
/*
	npm remove v-calender
	npm i v-calendar@1.0.0-beta.22
*/
import Calendar from 'v-calendar/lib/components/calendar.umd'

export default {
	components: {
		Calendar
	},
	data() {
	return {
		selectedDate: {},
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
	}
};
</script>
<template>
	<div class="overflow-y-scroll h-[32rem] sm:h-full p-5 space-y-8">
		<div>
			<p class="text-3xl text-slate-700 font-bold">Insights</p>
			<div class="flex items-center justify-between mt-5">
				<p class="text-2xl text-slate-700">{{ currentTime.date }}, {{ currentTime.month }}, {{ currentTime.year }}</p>
				<svg fill="none" height="24" viewBox="0 0 24 24" width="24">
					<path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M8 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M16 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M7.75 10.75H16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
				</svg>
			</div>

			<div class="flex items-center gap-2 mt-5">
				<div class="w-32 h-18 bg-secondary rounded-lg p-3">
					<div class="text-right text-slate-700">
						{{ currentTime.day }}
						<br />
						{{ currentTime.date }}
					</div>
				</div>

                	<div class="w-32 h-18 bg-secondary rounded-lg p-3">
						<div class="text-right text-slate-700">
							{{ currentTime.day }}
						<br />
						{{ currentTime.date }}
					</div>
				</div>
			</div>
		</div>

		<center class="bg-slate-700 rounded-xl p-5">
			<Calendar class="w-36"></Calendar>
		</center>

		<div class="p-5 bg-secondary rounded-xl">
			<div class="flex items-center justify-between">
				<p>Your progress</p>
				<p>60%</p>
			</div>
			<p>2 of 5 Completed</p>
			<div class="bg-gray-200 rounded-full h-1.5 dark:bg-white-700 mt-2">
				<div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300"></div>
			</div>
		</div>
	</div>
</template>


