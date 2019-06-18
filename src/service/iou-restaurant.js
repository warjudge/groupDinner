/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-11 15:47:33
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-15 17:58:45
*/
import { ajax } from '../utils/ajax';
import api from '../api_config/api';
/**
 * @description 餐厅 白条资产状况
 * @param {*} param0 
 */
export function getIouAsset({
  id,
}) {
  return ajax({
    url: `${api.restaurant_iou_asset}/${id}`,
    type: 'json',
  });
}

/**
 * @description 餐厅 待处理白条列表
 * @export
 * @param {*} {
 *   id： 用户id
 *   pageNum = 1,
 *   pageSize = 10,
 * }
 * @returns
 */
export function getIouUnhandleList({
  id,
  pageNum = 1,
  pageSize = 10,
}) {
  return ajax({
    url: `${api.restaurant_unhandle_list}/${id}`,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 餐厅 历史白条记录
 * @export
 * @param {*} {
 *   id: 用户id
 *   pageNum = 1,
 *   pageSize = 10,
 * }
 * @returns
 */
export function getIouRecordList({
  id,
  pageNum = 1,
  pageSize = 10,
}) {
  return ajax({
    url: `${api.restaurant_record_list}/${id}`,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 获取白条详情
 * @export
 * @param {*} {
 *   number: 白条编号
 *   pageNum,
 *   pageSize,
 * }
 * @returns
 */
export function getIouDetail({
  number,
  pageNum,
  pageSize,
}) {
  return ajax({
    url: `${api.restaurant_iou_detail}/${number}`,
    type: 'json',
    data: {
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 白条兑付详情
 * @export
 * @param {*} {
 *   id: 白条id
 * }
 * @returns
 */
export function getIouPaymentDetail({
  id,
}) {
  return ajax({
    url: `${api.restaurant_iou_payment_detail}/${id}`,
    type: 'json',
  });
}

/**
 * @description 获取白条账单统计值
 * @param {*} param0 
 */
export function getIouBillTotal({
  id,
  beginDate,
  endDate,
}) {
  return ajax({
    url: `${api.restaurant_iou_bill_total}/${id}`,
    type: 'json',
    data: {
      beginDate,
      endDate,
    },
  });
}

/**
 * @description 白条账单列表
 * @export
 * @param {*} {
 *   id: 用户id
 *   beginDate: 起始时间 时间戳
 *   endDate: 结束时间 时间戳
 *   pageNum,
 *   pageSize,
 * }
 * @returns
 */
export function getIouBillList({
  id,
  beginDate,
  endDate,
  pageNum,
  pageSize,
}) {
  return ajax({
    url: `${api.restaurant_iou_bill_list}/${id}`,
    type: 'json',
    data: {
      beginDate,
      endDate,
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 获取入金账单统计值
 * @param {*} param0 
 */
export function getGoldBillTotal({
  id,
  beginDate,
  endDate,
}) {
  return ajax({
    url: `${api.restaurant_gold_bill_total}/${id}`,
    type: 'json',
    data: {
      beginDate,
      endDate,
    },
  });
}

/**
 * @description 入金账单列表
 * @export
 * @param {*} {
 *   id: 用户id
 *   beginDate: 起始时间 时间戳
 *   endDate: 结束时间 时间戳
 *   pageNum,
 *   pageSize,
 * }
 * @returns
 */
export function getIouConsumeBillList({
  id,
  beginDate,
  endDate,
  pageNum,
  pageSize,
}) {
  return ajax({
    url: `${api.restaurant_gold_bill_list}/${id}`,
    type: 'json',
    data: {
      beginDate,
      endDate,
      pageNum,
      pageSize,
    },
  });
}

/**
 * @description 白条账单 出金账单 详情
 * @export
 * @param {*} {
 *   id: 白条id
 * }
 * @returns
 */
export function getBillDetail({
  id,
  type, // iou 白条 gold 入金账单
}) {
  const urlMap = {
    iou: api.restaurant_iou_bill_detail,
    gold: api.restaurant_gold_bill_detail,
  };
  return ajax({
    url: `${urlMap[type]}/${id}`,
    type: 'json',
  });
}


