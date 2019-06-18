<!-- 餐厅 历史白条 -->
<template>
  <section class="wrap">
    <iou-history-template billUrl="/supplier-iou-bill">
      <iou-item />
    </iou-history-template>
  </section>
</template>

<script>
import IouHistoryTemplate from '../basic-views/iou-history-template';
import IouItem from '../basic-views/iou-item';

export default {
  data () {
    return {

    }
  },
  components: {
    IouHistoryTemplate,
    IouItem
  }
}
</script>

<style scoped>

</style>
