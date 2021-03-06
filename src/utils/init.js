/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-12 17:39:42
* @Last Modified by: huifen.ling
* @Last Modified time: 2018-10-12 17:39:42
*/
Date.prototype.format = function(format) {
  const formatMap = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
  };
  if (/(y+)/.test(format)) {
    format = format.replace(/(y+)/, (str) => {
      let year = this.getFullYear().toString();
      return year.slice(-str.length);
    });
  }
  Object.keys(formatMap).forEach(key => {
    const reg = new RegExp(`(${key})`);
    if (reg.test(format)) {
      // 如果格式要求只有一位，则时间位数一位就一位，两位就两位，保持不变。如果格式要求两位，则必须一位补0。
      format = format.replace(reg, RegExp.$1.length == 1 ? formatMap[key] : `0${formatMap[key]}`.slice(-2));
    }
  });
  return format;
}
