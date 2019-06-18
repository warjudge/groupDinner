/*
* @name:
* @description:
* @Author: huifen.ling
* @Date: 2018-10-11 15:47:33
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-10-13 15:32:59
*/
import api from '../api_config/api';
import { ajax } from '../utils/ajax';

/**提交店铺信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitStore({
  companyName, 
  name,
  takeoutPhone,
  ownerName,
  ownerPhone,
  type,
  address,
  addressDetail,
  outdoorPhoto,
  logo,
  indoorPhoto,
}) {
  return ajax({
    url: api.restaurant_apply_info,
    method:'form',
    data: {
      companyName, 
      name,
      takeoutPhone,
      ownerName,
      ownerPhone,
      type,
      address,
      addressDetail,
      outdoorPhoto,
      logo,
      indoorPhoto,
    },
  });
}
/**提交店铺信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitStoreUpdate({
  companyName, 
  name,
  takeoutPhone,
  ownerName,
  ownerPhone,
  type,
  address,
  addressDetail,
  outdoorPhoto,
  logo,
  indoorPhoto,
}) {
  return ajax({
    url: api.restaurant_apply_info_update,
    method:'form',
    data: {
      companyName, 
      name,
      takeoutPhone,
      ownerName,
      ownerPhone,
      type,
      address,
      addressDetail,
      outdoorPhoto,
      logo,
      indoorPhoto,
    },
  });
}
/**查询资质信息填写状态
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function viewAptitudeFill({
  
}) {
  return ajax({
    url: api.restaurant_view_aptitude_fill,
    method:'post',
    data: {

    },
  });
}
/**提交营业执照信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitBuslicense({
  businessLicence,
}) {
  return ajax({
    url: api.restaurant_apply_buslicence,
    method:'form',
    data: {
      businessLicence,
    },
  });
}
/**更新营业执照信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitBuslicenseUpdate({
  businessLicence,
}) {
  return ajax({
    url: api.restaurant_apply_buslicence_update,
    method:'form',
    data: {
      businessLicence,
    },
  });
}
/**提交身份证信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitIdcard({
  idcardface,
  idcardback,
}) {
  return ajax({
    url: api.restaurant_apply_card,
    method:'form',
    data: {
      idcardface,
      idcardback,
    },
  });
}
/**更新身份证信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitIdcardUpdate({
  idcardface,
  idcardback,
}) {
  return ajax({
    url: api.restaurant_apply_card_update,
    method:'form',
    data: {
      idcardface,
      idcardback,
    },
  });
}
/**提交许可证信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitlicense({
  permission,
}) {
  return ajax({
    url: api.restaurant_apply_permission,
    method:'form',
    data: {
      permission,
    },
  });
}
/**更新许可证信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitlicenseUpdate({
  permission,
}) {
  return ajax({
    url: api.restaurant_apply_permission_update,
    method:'form',
    data: {
      permission,
    },
  });
}
/**完成提交入驻申请(收款信息)
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitReceiptPermit({
  bankNo,
  legalName,
  bankName,
  legalPhone,
}) {
  return ajax({
    url: api.restaurant_apply_payinfo_permit,
    type: 'json',
    data: {
      bankNo,
      legalName,
      bankName,
      legalPhone,
    },
  });
}
/**
添加收款信息
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitReceipt({
  bankNo,
  legalName,
  bankName,
  legalPhone,
}) {
  return ajax({
    url: api.restaurant_apply_payinfo,
    type: 'json',
    data: {
      bankNo,
      legalName,
      bankName,
      legalPhone,
    },
  });
}
/**更新提交入驻申请(收款信息)
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function submitReceiptUpdate({
  bankNo,
  legalName,
  bankName,
  legalPhone,
}) {
  return ajax({
    url: api.restaurant_apply_payinfo_update,
    type: 'json',
    data: {
      bankNo,
      legalName,
      bankName,
      legalPhone,
    },
  });
}
/**验证开店申请信息是否填完
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function validateApplyInfo({

}) {
  return ajax({
    url: api.restaurant_validate_apply_wrote,
    type: 'json',
    data: {

    },
  });
}
/**验证开店申请信息的审核状态
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function validateApplyCheck({

}) {
  return ajax({
    url: api.restaurant_validate_apply_check,
    type: 'json',
    data: {

    },
  });
}
/**完善开店信息提交（完善信息确认按钮）
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function applyPermit({

}) {
  return ajax({
    url: api.restaurant_apply_permit,
    type: 'json',
    data: {

    },
  })
}
/**审核失败后，修改审核信息，重新提交审核
 * @description 
 * @export
 * @param {*} {
 *   
 * }
 * @returns
 */
export function applyPermitSubmit({

}) {
  return ajax({
    url: api.restaurant_reapply_sumit,
    type: 'json',
    data: {

    },
  })
}
