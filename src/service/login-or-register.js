/**
* @name:
* @description:
* @Author: clg
* @Date: 2018-10-12 11:24:33
 * @Last Modified by: clg
 * @Last Modified time: 2018-10-11 16:07:37
*/
import { ajax } from '../utils/ajax.js';
import api from '../api_config/api.js';
/**
 *
 *获取验证码
 * @export
 * @param {*} {
 *   mobile,
 *   mcodeTypeBODY = 3,
 * }
 * @returns
 */
export function getMcode({
  mobile,
  mcodeType = 3,
}) {
  return ajax({
    url: api.get_mcode,
    method: 'post',
    data: {
      mobile,
      mcodeType,
    },
  });
}
/**
 *
 *用户的登录和注册(带验证码)
 * @export
 * @param {*} {
 *   mobile,
 *   mcode,
 *   roleType,  角色类型:0, "正常"，1, "餐厅"，2, "公司"，3, "供应商"
 * }
 * @returns
 */
export function mcodeLoginOrRegister({
  mobile,
  mcode,
  roleType,
}) {
  return ajax({
    url: api.mobile_register_or_login,
    method: 'post',
    data: {
      mobile,
      mcode,
      roleType,
    },
  });
}
/**
 *
 *判断用户是否注册过和设置过登录密码
 * @export
 * @param {*} {
 *   mobile,
 * }
 * @returns
 */
export function mobileHasRegisterOrPwd({
  mobile,
}) {
  return ajax({
    url: api.mobile_has_register,
    method: 'post',
    data: {
      mobile,
    },
  });
}
/**
 *
 *根据手机号去设置或者修改登录密码
 * @export
 * @param {*} {
 *   mobile,
 *   mcode,
 *   pwd,
 *   passWordType,  密码类型，目前支付密码传1。
 * }
 * @returns
 */
export function setPwdByMobile({
  mobile,
  mcode,
  pwd,
  passWordType,
}) {
  return ajax({
    url: api.set_password_by_mobile,
    method: 'post',
    data: {
      mobile,
      mcode,
      pwd,
      passWordType,
    },
  });
}
/**
 *
 *通过旧密码的方式去修改密码
 * @export
 * @param {*} {
 *   uid,
 *   oldPwd,
 *   newPwd,
 *   passWordType,  要修改的密码类型。1:登录密码
 * }
 * @returns
 */
export function setPwdByOldPwd({
  uid,
  oldPwd,
  newPwd,
  passWordType,
}) {
  return ajax({
    url: api.set_password_by_oldpwd,
    method: 'post',
    data: {
      uid,
      oldPwd,
      newPwd,
      passWordType,
    },
  });
}
/**
 *
 *密码登录
 * @export
 * @param {*} {
 *   mobile,
 *   pwd,
 * }
 * @returns
 */
export function pwdLogin({
  mobile,
  pwd,
}) {
  return ajax({
    url: api.mobile_pwd_login,
    method: 'post',
    data: {
      mobile,
      pwd,
    },
  });
}