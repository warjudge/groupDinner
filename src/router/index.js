import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import login2 from '@/views/login2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login2',
      name: 'login2',
      component: login2
    },
    /* 餐厅申请认证 */
    { path:'/restaurant-apply-detail',
      component: resolve => require(['../views/apply-restaurant/apply_detail.vue'], resolve)
    },
    { path:'/restaurant-store-info',
      component: resolve => require(['../views/apply-restaurant/store_info.vue'], resolve)
    },
    { path:'/restaurant-qualification-info',
      component: resolve => require(['../views/apply-restaurant/qualification_info.vue'], resolve)
    },
    { path:'/restaurant-businessLicense-upload-case',
      component: resolve => require(['../views/apply-restaurant/businesslicense_upload_case.vue'], resolve)
    },
    { path:'/restaurant-businessLicense-upload',
      component: resolve => require(['../views/apply-restaurant/businesslicense_upload.vue'], resolve)
    },
    { path:'/restaurant-idcard-upload',
      component: resolve => require(['../views/apply-restaurant/idcard_upload.vue'], resolve)
    },
    { path:'/restaurant-license-upload-case',
      component: resolve => require(['../views/apply-restaurant/license_upload_case.vue'], resolve)
    },
    { path:'/restaurant-license-upload',
      component: resolve => require(['../views/apply-restaurant/license_upload.vue'], resolve)
    },
    { path:'/restaurant-receipt-info',
      component: resolve => require(['../views/apply-restaurant/receipt_info.vue'], resolve)
    },
    { path:'/restaurant-bank-list',
      component: resolve => require(['../views/apply-restaurant/bank_list.vue'], resolve)
    },
    { path:'/restaurant-apply-submit',
      component: resolve => require(['../views/apply-restaurant/apply_submit.vue'], resolve)
    },
    { path:'/restaurant-apply-result',
      component: resolve => require(['../views/apply-restaurant/apply_result.vue'], resolve)
    },
    { path:'/restaurant-apply-result-error',
      component: resolve => require(['../views/apply-restaurant/apply_result_error.vue'], resolve)
    },
    /* 公司申请认证 */
    { path:'/company-apply-detail',
      component: resolve => require(['../views/apply-company/apply_detail.vue'], resolve)
    },
    { path:'/company-qualification-info',
      component: resolve => require(['../views/apply-company/qualification_info.vue'], resolve)
    },
    { path:'/company-businessLicense-upload-case',
      component: resolve => require(['../views/apply-company/businesslicense_upload_case.vue'], resolve)
    },
    { path:'/company-businessLicense-upload',
      component: resolve => require(['../views/apply-company/businesslicense_upload.vue'], resolve)
    },
    { path:'/company-idcard-upload',
      component: resolve => require(['../views/apply-company/idcard_upload.vue'], resolve)
    },
    { path:'/company-license-upload-case',
      component: resolve => require(['../views/apply-company/license_upload_case.vue'], resolve)
    },
    { path:'/company-license-upload',
      component: resolve => require(['../views/apply-company/license_upload.vue'], resolve)
    },
    { path:'/company-receipt-info',
      component: resolve => require(['../views/apply-company/receipt_info.vue'], resolve)
    },
    { path:'/company-receipt-info',
      component: resolve => require(['../views/apply-company/receipt_info.vue'], resolve)
    },
    { path:'/company-bank-list',
      component: resolve => require(['../views/apply-company/bank_list.vue'], resolve)
    },
    { path:'/company-apply-submit',
      component: resolve => require(['../views/apply-company/apply_submit.vue'], resolve)
    },
    { path:'/company-apply-result',
      component: resolve => require(['../views/apply-company/apply_result.vue'], resolve)
    },
    { path:'/company-apply-result-error',
      component: resolve => require(['../views/apply-company/apply_result_error.vue'], resolve)
    },

    /* 餐厅首页 */
    { path:'/restaurant-home',
      component: resolve => require(['../views/home-restaurant/index.vue'], resolve)
    },
    /* 餐厅商品管理 */
    { path:'/restaurant-commodity-manage',
      component: resolve => require(['../views/home-restaurant/commodity_manage.vue'], resolve)
    },
    /* 餐厅添加商品管理 */
    { path:'/restaurant-add-commodity',
      component: resolve => require(['../views/home-restaurant/add_commodity.vue'], resolve)
    },
    /* 餐厅订单管理 */
    { path:'/restaurant-order-manage',
      component: resolve => require(['../views/order-restaurant/order_manage.vue'], resolve)
    },
    /* 餐厅订单详情 */
    { path:'/restaurant-order-detail',
      component: resolve => require(['../views/order-restaurant/order_detail.vue'], resolve)
    },
     /* 餐厅确认订单 */
    { path:'/restaurant-order-determine',
      component: resolve => require(['../views/order-restaurant/order_determine.vue'], resolve)
    },
    { path:'/mine',
      component: resolve => require(['../views/mine.vue'], resolve)
    },
    /* 公司 */
    {
      path: '/company', // 公司入口
      component: resolve => require(['../views/company/index.vue'], resolve),
      children: [
        {
          path: 'home', // 公司首页
          component: resolve => require(['../views/home-company/index.vue'], resolve)
        },
      ],
    },
    {
      path: '/company-iou', // 公司白条首页
      component: resolve => require(['../views/iou-company/index.vue'], resolve),
    },
    {
      path: '/company-history-list', // 公司历史白条
      component: resolve => require(['../views/iou-company/history-list.vue'], resolve),
    },
    {
      path: '/company-iou-payment-detail/:type/:iouId',  // 公司白条兑付详情
      component: resolve => require(['../views/iou-company/iou-payment-detail.vue'], resolve),
    },
    {
      path: '/company-payment/:iouId', // 兑付白条页面
      component: resolve => require(['../views/iou-company/payment.vue'], resolve),
    },
    {
      path: '/company-payer-info/:iouId',  // 公司兑付人信息
      component: resolve => require(['../views/iou-company/payer-info.vue'], resolve),
    },
    {
      path: '/company-iou-bill', // 公司账单列表
      component: resolve => require(['../views/iou-company/bill-index.vue'], resolve),
    },
    {
      path: '/company-bill-detail/:type/:iouId', // 公司账单详情 type: iou gold
      component: resolve => require(['../views/iou-company/bill-detail.vue'], resolve),
    },
    {
      path: '/company-order-submit',  // 公司提交订单
      component: resolve => require(['../views/order-company/order_submit.vue'], resolve),
    },
    {
      path: '/company-order-detail',  // 公司确认收货
      component: resolve => require(['../views/order-company/order_detail.vue'], resolve),
    },
     {
      path: '/company-address-add',  // 公司添加收货地址
      component: resolve => require(['../views/order-company/address_add.vue'], resolve),
    },
    {
      path: '/company-address-manage',  // 公司收货地址管理
      component: resolve => require(['../views/order-company/address_manage.vue'], resolve),
    },
    /* 餐厅 */
    {
      path: '/restaurant-iou', // 餐厅白条首页
      component: resolve => require(['../views/iou-restaurant/index.vue'], resolve),
    },
    {
      path: '/restaurant-history-list', // 餐厅历史白条
      component: resolve => require(['../views/iou-restaurant/history-list.vue'], resolve),
    },
    {
      path: '/restaurant-iou-payment-detail/:iouId',  // 餐厅 白条兑付详情
      component: resolve => require(['../views/iou-restaurant/iou-payment-detail.vue'], resolve),
    },
    {
      path: '/restaurant-iou-bill', // 餐厅账单列表
      component: resolve => require(['../views/iou-restaurant/bill-index.vue'], resolve),
    },
    {
      path: '/restaurant-bill-detail/:type/:iouId', // 公司账单详情 type: iou gold
      component: resolve => require(['../views/iou-restaurant/bill-detail.vue'], resolve),
    },
     /* 供货商 */
    {
      path: '/supplier-iou', // 供货商白条首页
      component: resolve => require(['../views/iou-supplier/index.vue'], resolve),
    },
    {
      path: '/supplier-history-list', // 供货商历史白条
      component: resolve => require(['../views/iou-supplier/history-list.vue'], resolve),
    },
    /* {
      path: '/supplier-iou-bill', 
      component: resolve => require(['../views/basic-views/iou-bill-index.vue'], resolve),
    }, */
    /* 白条公共页面 */
    {
      path: '/iou-detail/:number', // 白条详情
      component: resolve => require(['../views/basic-views/iou-detail.vue'], resolve),
    },
    {
      path: '/iou-bill-detail',
      component: resolve => require(['../views/basic-views/iou-bill-detail.vue'], resolve),
    },
    {
      path: '/iou-debtor-payment-detail',  // 白条兑付者 白条兑付详情
      component: resolve => require(['../views/basic-views/iou-payment-detail.vue'], resolve),
      props: { type: 'debtor' },
    },
    /* 点餐 */
    {
      path: '/order-menu',  // 白条兑付者 白条兑付详情
      component: resolve => require(['../components/order-menu/order-menu.vue'], resolve),
    },
  ]
})
