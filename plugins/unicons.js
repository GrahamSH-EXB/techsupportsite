import Vue from "vue";
import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import { uniArrowLeft, uniArrowRight } from "vue-unicons/dist/icons";

Unicon.add([uniArrowLeft, uniArrowRight]);
Vue.use(Unicon);
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

Vue.use(VueTelInput);
