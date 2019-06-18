<!-- 白条详情 -->
<template>
  <scroll class="iou-wrap" ref="scroll">
    <!-- 返回箭头 -->
    <back-block></back-block>
    <header class="detail-hd">
      <h1 class="hd-title">白条详情</h1>
      <h4 class="hd-sub-title">编号：{{ this.$route.params.number || '' }}</h4>
    </header>
    <main class="detail-list">
      <section class="blue-bgc-box iou-detail-item" v-for="item in list" :key="item.orderNumber">
        <!-- 支付白条 -->
        <header class="item-hd" v-if="item.transferType === 0">
          <p class="order-number">订单编号</p>
          <p class="payer">支付企业</p>
          <p class="payee">收款企业</p>
          <p class="amount">支付白条</p>
        </header>
        <!-- 兑付白条 -->
        <header class="item-hd" v-if="item.transferType === 1">
          <p class="order-number">订单编号</p>
          <p class="payer">支付企业</p>
          <p class="payee">收款人</p>
          <p class="amount">收入白条</p>
        </header>
        <!-- 转账白条 -->
        <header class="item-hd" v-if="item.transferType === 2">
          <p class="order-number">转账编号</p>
          <p class="payer">转账企业</p>
          <p class="payee">收款企业</p>
          <p class="amount">转账白条</p>
        </header>
        <main class="item-body">
          <p class="order-number">{{ item.orderNumber }}</p>
          <p class="payer">{{ item.payerCompany }}</p>
          <p class="payee">{{ item.payeeName }}</p>
          <p class="amount green">{{ item.cashAmount }}</p>
        </main>
        <footer class="item-footer">下单时间：{{ item.paidTime | formatDate('yyyy-MM-dd hh:mm:ss') }}</footer>
      </section>
    </main>
  </scroll>
</template>

<script>
import { getIouDetail } from '../../service/iou-company.js';

export default {
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
      typeMap: {
        0: '支付白条',
        1: '兑付白条',
        2: '转账白条',
      },
    }
  },
  mounted() {
    this.handleGetDetail();
  },
  methods: {
    async handleGetDetail() {
      const scroll = this.$refs.scroll;
      const { pageNum, pageSize } = this;
      const res = await getIouDetail({ pageNum, pageSize, number: this.$route.params.number });
      if (res.code == 200) {
        const { records = [], total } = res.data || {};
        this.list.push(...records);
        // 如果未加载完毕, 增加页码。否则停止监听上拉加载事件
        if (scroll.isLoadAllData(this.list.length, total)) {
          this.pageNum++;
        }
        scroll.loaded();
      } else { // ajax报错
        scroll.loadError();
      }
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';

.iou-wrap {
  height: 100%;
  background-color: var(--bgc-levelone);
}

.detail-hd {
  margin-bottom: .55rem;
  padding: 0 .4rem;
  font-weight: 800;
  color: #fff;
}
.hd-title {
  margin-bottom: .23rem;
  font-size: var(--g-lg-title);
  font-weight: 800;
  line-height: var(--g-lg-title);
}
.hd-sub-title {
  font-size: var(--g-sm-font-size);
  line-height: var(--g-sm-font-size);
}

.detail-list {
  padding: 0 .4rem;
}
.iou-detail-item {
  margin-bottom: .25rem;
  padding: 0;
  font-size: var(--g-sm-font-size);
}
.item-hd {
  display: flex;
   padding: 0 .4rem;
  line-height: 1.07rem;
  color: var(--g-color-grey);
  border-bottom: 1px solid var(--bgc-grey);
}
.order-number {
  width: 1.9rem;
  margin-right: .24rem;
}
.payer {
  width: 2rem;
  margin-right: .4rem;
}
.payee {
  width: 1.92rem;
  margin-right: .45rem;
}
.amount {
  flex: 1;
  text-align: right;
}
.item-body {
  display: flex;
  align-items: center;
  padding: .2rem .4rem;
  line-height: .39rem;
  color: var(--g-color-black);
  & .amount {
    font-weight: 900;
  }
}

.item-footer {
  padding: 0 .4rem .4rem;
  color: var(--g-color-grey);
}
</style>
