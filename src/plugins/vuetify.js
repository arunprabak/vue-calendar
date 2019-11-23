import Vue from 'vue';
import Vuetify, {
  VApp,
  VSheet,
  VToolbar,
  VBtn,
  VIcon,
  VCalendar,
  VRow,
  VCol
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: { VApp, VSheet, VToolbar, VBtn, VIcon, VCalendar, VRow, VCol }
});

export default new Vuetify({
  theme: {
    dark: false
  }
});
