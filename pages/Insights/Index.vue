<template>
    <div class="overflow-y-scroll h-[36rem] mt-5">
        <div class="w-4/5 container mx-auto">
            <p class="text-4xl text-black-500 font-bold">Insights</p>
        </div>

        <div class="w-4/5 container mx-auto mt-9">
            <p class="text-2xl text-black-500 font-bold float-left">{{ currentTime.date }}, {{ currentTime.month }}, {{ currentTime.year }}</p>
            <img src="" alt="calendar" class="float-right"><br><br>
            <div class="flex">
                <div class="w-1/4 bg-secondary m-3 rounded-xl p-5">
                    <div class="float-right">
                        {{ currentTime.day }}<br>
                        {{ currentTime.date }}
                    </div>
                </div>
                <div class="w-1/4 bg-secondary m-3 rounded-xl p-5">
                    <div class="float-right">
                        {{ currentTime.day }}<br>
                        {{ currentTime.date }}
                    </div>
                </div>
                <div class="w-1/4 bg-secondary m-3 rounded-xl p-5">
                    <div class="float-right">
                        {{ currentTime.day }}<br>
                        {{ currentTime.date }}
                    </div>
                </div>
                <div class="w-1/4 bg-secondary m-3 rounded-xl p-5">
                    <div class="float-right">
                        {{ currentTime.day }}<br>
                        {{ currentTime.date }}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-4/5 p-5 container mx-auto px-5 bg-slate-700 mt-3 rounded-xl p-12">
            <center>
                <v-simple-calendar
                    class="text-white"
                    v-if="active"
                    :type="type"
                    :weekdayFormat="'cccccc'"
                    :value="selectedRange"
                    @change="changeValue"
                    :minDate="new Date('2021-01-03')"
                    :maxDate="new Date('2021-04-25')"
                    :infinite="infinite"
                >
                    <template v-slot:day-inside="{ day, formatDay }">{{ formatDay(day.date) }}</template>
                </v-simple-calendar>
            </center>
        </div>

        <div class="w-4/5 p-5 container mx-auto px-5 bg-secondary mt-3 rounded-xl">
            <p class="float-left">Your progress</p>
            <p class="float-right">60%</p><br>
            <p> 2 of 5 Completed</p>
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700">
                <div class="bg-gray-600 h-1.5 rounded-full dark:bg-grey-300" ></div>
            </div>
        </div>
    
    </div>
    
</template>
<script>
import  VSimpleCalendar  from  '@romanran/vue-simple-calendar'
import '@romanran/vue-simple-calendar/dist/vue-simple-calendar.css'
export default {
    components: {
        VSimpleCalendar
    },
  data() {
    return {
        // VSimpleCalendar variables
        selectedRange: null,
        type: 'single',
        active: true,
        infinite: false,
        
        currentTime: {
            year: '2022',
            month: 'June',
            date: '03',
            day: 'Fri',
            hour: '3',
            min: '37',
            second: '23'
        },
        user: {
            username: 'Heesu Kim'
        }
    }
  },
  methods: {
      // VSimpleCalendar methods
		changeValue(value) {
			this.selectedRange = value
		},
	},
}
</script>