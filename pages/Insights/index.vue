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
		const habits = {
			basketball: [
				{
					description: 'Play basketball with Teh.',
					isComplete: false,
					dates: { weekdays: 6 },  // every friday
					color: 'red',
				},
			],
			football: [
				{
					description: 'Play football with Jinas.',
					isComplete: false,
					dates: { weekdays: 4 },  // every wednesday
					color: 'blue',
				},
			]
		}
		return {
			habits,
			timezone: '',
			selectedDate: {},
			today: new Date(),
			user: {
				username: "Heesu Kim",
			},
		};
	},
	computed: {
		// for popovers
		attributes() {
			return [
				// Attributes for basketball
				...this.habits.basketball.map(element => ({
					dates: element.dates,
					dot: {
						color: element.color,
						class: element.isComplete ? 'opacity-75' : '',
					},
					popover: {
						label: element.description,
						visibility: 'click'
					},
					customData: element,
				})),
				// Attributes for football
				...this.habits.football.map(element => ({
					dates: element.dates,
					dot: {
						color: element.color,
						class: element.isComplete ? 'opacity-75' : '',
					},
					popover: {
						label: element.description,
						visibility: 'click'
					},
					customData: element,
				})),
			];
		}
	},
	methods: {
		dateFormating: function (type, date) {
			var format = ""
			if (type === 'ymd') {
				format += this.today.getFullYear() + '-';
			} else if (type === 'md' && date === 'tomorrow') {
				this.today.setDate(this.today.getDate() + 1)
			}
			format += ((this.today.getMonth() + 1) > 9 ? '' : '0') + (this.today.getMonth() + 1) + '-' + (this.today.getDate() > 9 ? '' : '0') + this.today.getDate()
			return format
		}
	}
}
</script>
<template>
	<div class="overflow-y-scroll h-[32rem] sm:h-full p-5 space-y-8">
		<div>
			<p class="text-3xl text-slate-700 font-bold dark:text-white">Insights</p>
			<div class="flex items-center justify-between mt-5">
				<p class="text-2xl text-slate-700 dark:text-white">{{ dateFormating('ymd', 'today') }}
				</p>
				<svg fill="none" height="24" viewBox="0 0 24 24" width="24" class="dark:text-white">
					<path
						d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
						stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
					<path d="M8 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
						stroke-width="1.5" />
					<path d="M16 4.75V8.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
						stroke-width="1.5" />
					<path d="M7.75 10.75H16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
						stroke-width="1.5" />
				</svg>
			</div>

			<div class="flex items-center gap-2 mt-5">
				<div class="w-32 h-18 bg-secondary rounded-lg p-3">
					<div class="text-right text-slate-700">
						{{ dateFormating('md', 'today') }}
					</div>
				</div>

				<div class="w-32 h-18 bg-secondary rounded-lg p-3">
					<div class="text-right text-slate-700">
						{{ dateFormating('md', 'tomorrow') }}
					</div>
				</div>
			</div>
		</div>

		<center class="bg-slate-700 rounded-xl p-5">
			<Calendar :attributes='attributes' class="w-36" color="red" is-dark is-range></Calendar>
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


