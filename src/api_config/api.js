/**
 * 
 * api配置
 */
export const baseUrl = {
  // development: 'http://114.55.11.139:1029/',
  // production: 'http://114.55.11.139:1029/',
  // development: 'http://172.16.100.67:8000/',
  // production: 'http://172.16.100.67:8000/',
  development: 'http://192.168.20.76:8000/',
};
import part2 from './api-part2.js'
import part3 from './api-part3.js'
let exportApis = {
  get_mcode: '/tuser/api/user/getMcode',  //发送验证码
  mobile_register_or_login: '/tuser/api/user/mobileRegisterOrLogin',  //用户的登录和注册(带验证码)
  mobile_has_register: '/tuser/api/user/mobileHasRegister',  //判断用户是否注册过和设置过登录密码
  set_password_by_mobile: '/tuser/api/user/setPasswordByMobile',  //根据手机号去设置或者修改登录密码
  set_password_by_oldpwd: '/tuser/api/user/setPasswordByOldPwd',  //通过旧密码的方式去修改密码
  mobile_pwd_login: '/tuser/api/user/mobilePwdLogin',  //密码登录
  /*餐厅申请认证*/
  restaurant_apply_info:'/front/restaurant/apply/info',
  restaurant_apply_info_update:'/front/restaurant/apply/info/update',
  restaurant_view_aptitude_fill:'/front/restaurant/view/aptitude/fill',
  restaurant_apply_buslicence:'/front/restaurant/apply/buslicence',
  restaurant_apply_buslicence_update:'/front/restaurant/apply/buslicence/update', 
  restaurant_apply_card:'/front/restaurant/apply/card',
  restaurant_apply_card_update:'/front/restaurant/apply/card/update',
  restaurant_apply_permission:'/front/restaurant/apply/permission',
  restaurant_apply_permission_update:'/front/restaurant/apply/permission/update',
  restaurant_apply_payinfo:'/front/restaurant/apply/payinfo',
  restaurant_apply_payinfo_permit:'/front/restaurant/apply/payinfo/permit',
  restaurant_apply_payinfo_update:'/front/restaurant/apply/payinfo/update',
  restaurant_validate_apply_wrote:'/front/restaurant/validate/apply/wrote',
  restaurant_validate_apply_check:'/front/restaurant/validate/apply/check',
  restaurant_apply_permit:'/front/restaurant/apply/permit',
  restaurant_reapply_sumit:'/front/restaurant/reapply/sumit',
  /*公司申请认证*/
  company_view_aptitude_fill:'/front/company/view/aptitude/fill',
  company_apply_buslicence:'/front/company/apply/buslicence',
  company_apply_buslicence_update:'/front/company/apply/buslicence/update', 
  company_apply_card:'/front/company/apply/card',
  company_apply_card_update:'/front/company/apply/card/update',
	company_apply_permission:'/front/company/apply/permission',
  company_apply_permission_update:'/front/company/apply/permission/update',
  company_apply_payinfo:'/front/company/apply/payinfo',
	company_apply_payinfo_permit:'/front/company/apply/payinfo/permit',
  company_apply_payinfo_update:'/front/company/apply/payinfo/update',
  company_validate_apply_wrote:'/front/company/validate/apply/wrote',
	company_validate_apply_check:'/front/company/validate/apply/check',
  company_apply_permit:'/front/company/apply/permit',
  company_reapply_submit:'/front/company/reapply/submit',
  /*餐厅首页-基本操作*/
  restaurant_view:'/restaurant/view',
  restaurant_online_status_update:'/restaurant/online/status/update',
  restaurant_online_time_change:'/restaurant/online/time/change',
};
for(let attr in part2){
  exportApis[attr] = part2[attr];
}
for(let attr in part3){
  exportApis[attr] = part3[attr];
}
export default exportApis;