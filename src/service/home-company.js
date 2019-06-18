/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-14 19:24:15
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-15 20:47:19
*/
import api from '../api_config/api';
import { ajax } from '../utils/ajax';

/**
 * @description 已选择餐厅列表
 * @export
 * @param {*} {
 *   pageNum,
 *   pageSize,
 * }
 * @returns
 */
export function getSelectedRestaurantList({
  pageNum,
  pageSize = 10,
}) {
  return ajax({
    url: api.company_selected_restaurant_list,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 获取未选中餐厅列表
 * @export
 * @param {*} {
 *   pageNum,
 *   pageSize,
 * }
 * @returns
 */
export function getUnselectedRestaurantList({
  pageNum,
  pageSize,
}) {
  return ajax({
    url: api.company_unselected_restaurant_list,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 获取餐厅食物列表
 * @export
 * @param {*} {
 *   id
 * }
 * @returns
 */
export function getFoodList({
  id,
  pageNum,
  pageSize,
}) {
  return ajax({
    url: `${api.company_product_list}/${id}`,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 公司 添加餐厅
 * @export
 * @param {*} {
 *   restaurantId: 餐厅id
 *   hasBreakfast: 早餐是否可选
 *   breakfastOn: 早餐点餐开始时间
 *   breakfastOff: 早餐点餐结束时间
 *   hasLunch: 午餐是否可选
 *   lunchOn: 午餐点餐开始时间
 *   lunchOff: 午餐点餐结束时间
 *   hasDinner: 晚餐是否可点
 *   dinnerOn: 晚餐点餐开始时间
 *   dinnerOff: 晚餐点餐结束时间
 * }
 * @returns
 */
export function addRestaurant({
  restaurantId,
  hasBreakfast,
  breakfastOn,
  breakfastOff,
  hasLunch,
  lunchOn,
  lunchOff,
  hasDinner,
  dinnerOn,
  dinnerOff,
}) {
  return ajax({
    url: api.company_add_restaurant,
    type: 'json',
    data: {
      restaurantId,
      hasBreakfast,
      breakfastOn,
      breakfastOff,
      hasLunch,
      lunchOn,
      lunchOff,
      hasDinner,
      dinnerOn,
      dinnerOff,
    },
  });
}

/**
 * @description 删除餐厅
 * @export
 * @param {*} {
 *   id： 餐厅id
 * }
 * @returns
 */
export function deleteRestaurant({
  id
}) {
  return ajax({
    url: `${api.company_delete_restaurant}/${id}`,
    type: 'json',
    data: {

    },
  });
}
