/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-09-30 18:44:10
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-16 16:17:07
*/
import Vue from 'vue';
import { Popup, DatetimeView, Group, Cell, CellBox, XInput, InlineLoading, XSwitch, } from 'vux';
import BackBlock from './back-block.vue';
import Info from './info/info.vue';
import InfoItem from './info/info-item.vue';
import NumberBtn from './form/numberBtn/index.vue';
import Scroll from './scroll/index.vue';
import Radio from './form/radio/index.vue';
import TimePicker from './form/timePicker/index.vue';
import TimeRangePicker from './time-range-picker/index.vue';

Vue.component('popup', Popup);
Vue.component('datetime-view', DatetimeView);
Vue.component('group', Group);
Vue.component('cell', Cell);
Vue.component('cell-box', CellBox);
Vue.component('x-input', XInput);
Vue.component('inline-loading',InlineLoading);
Vue.component('x-switch', XSwitch)
Vue.component('back-block', BackBlock);
Vue.component('info-item', InfoItem);
Vue.component('info', Info);
Vue.component('number-btn', NumberBtn);
Vue.component('scroll', Scroll);
Vue.component('Radio', Radio);
Vue.component('time-picker', TimePicker);
Vue.component('time-range-picker', TimeRangePicker);
