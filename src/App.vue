<template>
  <div class="calendar">
    <CalendarFilter></CalendarFilter>
    <GridCalendar
      :calendarType="calendarType"
      :currentDate="currentDate"
      :dateValue="dateValue"
      :events="eventsDetails"
    ></GridCalendar>
  </div>
</template>

<script>
// Packages
import moment from 'moment';
import eventsDetails from './components/data';

// Components
import GridCalendar from './components/GridCalendar';
import CalendarFilter from './components/CalendarFilter';

export default {
  name: 'app',
  components: {
    GridCalendar,
    CalendarFilter
  },
  data() {
    return {
      calendarType: 'month',
      eventsDetails
    };
  },
  computed: {
    date() {
      return Date.now();
    },
    currentDate() {
      return moment(this.date).format('YYYY-MM-D');
    },
    dateValue() {
      return moment(this.date).format('YYYY-MM-D');
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 30px;
  display: flex;
}
</style>
