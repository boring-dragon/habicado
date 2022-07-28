<template>
	<div class="max-w-screen-xl px-4 py-12 mx-auto">
		<Portal to="header">
			<h2 class="text-3xl font-bold text-primary">Insight</h2>
		</Portal>
		<div class="relative grid grid-cols-1 gap-x-14">
			
			
			<section :class="[monthIdx === months.length - 1 && 'block', 'text-center']" :key="monthIdx" v-for="(month, monthIdx) in months">
				<h2 class="font-semibold text-gray-900">{{ month.name }}</h2>
				<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
					<div>M</div>
					<div>T</div>
					<div>W</div>
					<div>T</div>
					<div>F</div>
					<div>S</div>
					<div>S</div>
				</div>
				<div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
					<button :class="[day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400', dayIdx === 0 && 'rounded-tl-lg', dayIdx === 6 && 'rounded-tr-lg', dayIdx === month.days.length - 7 && 'rounded-bl-lg', dayIdx === month.days.length - 1 && 'rounded-br-lg', 'relative py-1.5 hover:bg-gray-100 focus:z-10']" :key="day.date" type="button" v-for="(day, dayIdx) in month.days">
						<time :class="[day.isToday && 'bg-secondary font-semibold text-primary', 'mx-auto flex h-7 w-7 items-center justify-center rounded-full']" :datetime="day.date">{{ day.date.split('-').pop().replace(/^0/, '') }}</time>
					</button>
				</div>
			</section>
		</div>
		<section class="mt-12">
			<h2 class="font-semibold text-gray-900">Habbits List</h2>
			<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
				<li class="py-4 sm:flex">
					<time class="w-28 flex-none" datetime="2022-01-17">Wed, Jan 12</time>
					<p class="mt-2 flex-auto sm:mt-0">Nothing on today’s schedule</p>
				</li>
				<li class="py-4 sm:flex">
					<time class="w-28 flex-none" datetime="2022-01-19">Thu, Jan 13</time>
					<p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">View house with real estate agent</p>
					<p class="flex-none sm:ml-6">
						<time datetime="2022-01-13T14:30">2:30 PM</time> -
						<time datetime="2022-01-13T16:30">4:30 PM</time>
					</p>
				</li>
				<li class="py-4 sm:flex">
					<time class="w-28 flex-none" datetime="2022-01-20">Fri, Jan 14</time>
					<p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Meeting with bank manager</p>
					<p class="flex-none sm:ml-6">All day</p>
				</li>
				<li class="py-4 sm:flex">
					<time class="w-28 flex-none" datetime="2022-01-18">Mon, Jan 17</time>
					<p class="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Sign paperwork at lawyers</p>
					<p class="flex-none sm:ml-6">
						<time datetime="2022-01-17T10:00">10:00 AM</time> -
						<time datetime="2022-01-17T10:15">10:15 AM</time>
					</p>
				</li>
			</ol>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      months: [
        {
          name: new Date().toLocaleString('default', { month: 'long' }),
          days: [
            { date: "2021-12-27" },
            { date: "2021-12-28" },
            { date: "2021-12-29" },
            { date: "2021-12-30" },
            { date: "2021-12-31" },
            { date: "2022-01-01", isCurrentMonth: true },
            { date: "2022-01-02", isCurrentMonth: true },
            { date: "2022-01-03", isCurrentMonth: true },
            { date: "2022-01-04", isCurrentMonth: true },
            { date: "2022-01-05", isCurrentMonth: true },
            { date: "2022-01-06", isCurrentMonth: true },
            { date: "2022-01-07", isCurrentMonth: true },
            { date: "2022-01-08", isCurrentMonth: true },
            { date: "2022-01-09", isCurrentMonth: true },
            { date: "2022-01-10", isCurrentMonth: true },
            { date: "2022-01-11", isCurrentMonth: true },
            { date: "2022-01-12", isCurrentMonth: true, isToday: true },
            { date: "2022-01-13", isCurrentMonth: true },
            { date: "2022-01-14", isCurrentMonth: true },
            { date: "2022-01-15", isCurrentMonth: true },
            { date: "2022-01-16", isCurrentMonth: true },
            { date: "2022-01-17", isCurrentMonth: true },
            { date: "2022-01-18", isCurrentMonth: true },
            { date: "2022-01-19", isCurrentMonth: true },
            { date: "2022-01-20", isCurrentMonth: true },
            { date: "2022-01-21", isCurrentMonth: true },
            { date: "2022-01-22", isCurrentMonth: true },
            { date: "2022-01-23", isCurrentMonth: true },
            { date: "2022-01-24", isCurrentMonth: true },
            { date: "2022-01-25", isCurrentMonth: true },
            { date: "2022-01-26", isCurrentMonth: true },
            { date: "2022-01-27", isCurrentMonth: true },
            { date: "2022-01-28", isCurrentMonth: true },
            { date: "2022-01-29", isCurrentMonth: true },
            { date: "2022-01-30", isCurrentMonth: true },
            { date: "2022-01-31", isCurrentMonth: true },
            { date: "2022-02-01" },
            { date: "2022-02-02" },
            { date: "2022-02-03" },
            { date: "2022-02-04" },
            { date: "2022-02-05" },
            { date: "2022-02-06" },
          ],
        },
      ],
    };
  },

  methods: {
	async getHabbits() {

	}
  }
};
</script>