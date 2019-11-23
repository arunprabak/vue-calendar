<template>
  <div id="app">
    <GridCalendar></GridCalendar>
  </div>
</template>

<script>
import GridCalendar from './components/GridCalendar';

export default {
  name: 'app',
  components: {
    GridCalendar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
}
</style>
