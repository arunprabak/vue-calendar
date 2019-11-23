<template>
  <div class="grid-calendar">
    <VApp>
      <VSheet height="64">
        <VToolbar flat color="white">
          <VBtn fab text small @click="prev">
            <VIcon color="gray" small>mdi-chevron-left</VIcon>
          </VBtn>
          <div class="calendar-month-title">{{ monthTitle }}</div>
          <VBtn fab text small @click="next">
            <VIcon color="gray" small>mdi-chevron-right</VIcon>
          </VBtn>
        </VToolbar>
      </VSheet>
      <VSheet height="600">
        <VCalendar
          ref="calendar"
          v-model="startDate"
          :type="calendarType"
          :now="currentDate"
          :value="dateValue"
          :events="events"
          :event-text-color="eventStyle.color"
          :event-height="eventStyle.height"
          :event-color="getEventColor"
          @mouseenter:day="showPopover"
        ></VCalendar>
      </VSheet>
    </VApp>
  </div>
</template>

<script>
import vuetify from '@/plugins/vuetify';
import moment from 'moment';

export default {
  name: 'GridCalendar',
  vuetify,
  props: {
    calendarType: {
      type: String,
      default: 'month'
    },
    currentDate: {
      type: String
    },
    dateValue: {
      type: String
    },
    events: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      startDate: this.currentDate,
      eventStyle: {
        color: 'black',
        height: 25
      }
    };
  },
  computed: {
    monthTitle() {
      return moment(this.startDate).format('MMMM YYYY');
    }
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showPopover(event) {
      console.log(event);
      console.log('hovers');
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
  }
};
</script>

<style lang="scss">
.grid-calendar {
  flex: 0 1 70%;

  .calendar-month-title {
    font-size: 16px;
    font-weight: bold;
    padding: 0px 15px;
    color: #777;
  }

  // Vuetify
  .theme--light.v-application {
    background-color: transparent;
  }

  .theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside {
    background-color: #fff;
  }

  .theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
    border-right: 0px;
    color: #777;
  }

  .theme--light.v-calendar-weekly .v-calendar-weekly__day {
    border: #e0e0e0 1px solid;
  }

  .v-calendar .v-event.v-event-end {
    width: 100%;
    border-radius: 0px;
    padding: 2px;
  }
}
</style>
