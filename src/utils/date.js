/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-13 19:02:38
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-13 19:37:52
*/
const DateUtil = {
  getMonthFirstDayTimestamp(date) { // 获取date的月份的第一天0点的时间戳
    let myDate = date;
    if (!date) {
      myDate = new Date();
    } else if (typeof date === 'string') {
      myDate = new Date(date);
    }
    const firstDay = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
    return firstDay.getTime();
  },
  getMonthLastDayTimestamp(date) { // 获取date的月份的最后一天最后一秒的时间戳
    let myDate = date;
    if (!date) {
      myDate = new Date();
    } else if (typeof date === 'string') {
      myDate = new Date(date);
    }
    const lastDay = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0, 23, 59, 59);
    return lastDay.getTime();
  },
};

export default DateUtil;
