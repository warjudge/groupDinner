<!-- 餐厅 待处理白条 -->
<template>
  <section class="wrap">
    <iou-active-template billUrl="/supplier-iou-bill" historyIouUrl="/supplier-history-list">
      <iou-item />
    </iou-active-template>
  </section>
</template>

<script>
import IouActiveTemplate from '../basic-views/iou-active-template';
import IouItem from '../basic-views/iou-item';

export default {
  data () {
    return {

    }
  },
  components: {
    IouActiveTemplate,
    IouItem,
  }
}
</script>

<style scoped>

</style>
