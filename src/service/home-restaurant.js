/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-11 15:47:33
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-11 16:54:58
*/
import { ajax } from '../utils/ajax';
import api from '../api_config/api.js';
/**
 * @description 餐厅首页
 * @param {*} param0 
 */
export function getBaseInfo({

}) {
  return ajax({
    url: api.restaurant_view,
    type: 'json',
  });
}

/**
 * @description 餐厅更改营业状态
 * @param {*} param0 
 */
export function updateOnlineStatus({
  online
}) {
  return ajax({
    url: api.restaurant_view,
    type: 'json',
    data: {
      online,
    },
  });
}

/**
 * @description 餐厅更改营业时间
 * @param {*} param0 
 */
export function changeOnlineTime({
  onlineTimeBo 
}) {
  return ajax({
    url: api.restaurant_online_time_change,
    type: 'json',
    data: {
      onlineTimeBo,
    },
  });
}