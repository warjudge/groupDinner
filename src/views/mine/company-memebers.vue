<template>
  <div class="company-memebers">
    <header>
      <x-icon type="ios-arrow-left" class="x_icon" @click="redirectToMain()"></x-icon>
    </header>
    <div class="title">{{title}}</div>
    <div class="content">
      <div class="query-zone">
        <input class="query-input" type="text" placeholder="请输入姓名或手机号">
        <button style="color:white;margin-left:0.2rem;" @click="showAddMemberDlg()">添加</button>
      </div>
      <ul class="mine-modules rounded-rect">
        <li v-for='(item,$index) in listItems' :key="$index" class="mine-module-item">
          <div class='unchecked-radio' :class="{'checked-radio':item.isChecked}" @click="toggleSelect(item)"></div>
          <span class='mine-module-item-text'>{{item.name}}</span>
          <span class='mine-module-item-text'>{{item.phone}}</span>
          <div class="item-button-zone">
            <button v-if='item.isWaitCheck' class="item-button" @click="checkMemeberPass(item)">审核通过</button>
            <button v-if='item.isWaitCheck' class="item-button" @click="checkMemeberDeny(item)">拒绝</button>
          </div>
        </li>
      </ul>
    </div>

    <ul class="cover-dialog-bottom">
      <li class="bottom-select-option" style="padding:0 0.4rem;">
        <button class="bottom-right-btn" @click="submitBatchPass" style="">批量审核通过</button>
        <div class='unchecked-radio' :class="{'checked-radio':isSelectAll}" @click="toggleSelectAll()"></div>
        <span>全选</span>
      </li>
    </ul>

    <div v-if="isShowAddMemberDlg" class="cover-dialog" style="color:black;">
      <div class="cover-dialog-mask">
      </div>
      <div class="cover-dialog-middle">
        <div>
          <span class="span-radio" style="display:inline-block;;padding-left:5%;padding-top:0.4rem;">
            <input style="display:inline-block;padding-right:0.2rem;" type='radio' id='checkType1' name='checkType' :checked='addType==AddConsts.SingleAdd' @change="changeAddType('#checkType1', AddConsts.SingleAdd)"/>
            <span>单条添加</span>
          </span>
          <span class="span-radio" style="display:inline-block;padding-left:5%;padding-top:0.1rem;">
            <input style="display:inline-block;padding-right:0.2rem;" type='radio' id='checkType2' name='checkType' :checked='addType==AddConsts.BatchAdd' @change="changeAddType('#checkType2', AddConsts.BatchAdd)"/>
            <span>批量添加</span>
          </span>
        </div>
        <group title="单条添加公司员工" v-if="addType==AddConsts.SingleAdd">
          <cell title='姓名'>
            <input type="text" placeholder="请输入姓名">
          </cell>
          <cell title='手机号'>
            <input type="text" placeholder="请输入手机号">
          </cell>
          <cell class="btn-panel">
            <button class="double-btn" @click="submitAddMember">确认添加</button>
            <button class="double-btn" @click="isShowAddMemberDlg=false;">取消</button>
          </cell>
        </group>
        <group title="批量添加公司员工" v-if="addType==AddConsts.BatchAdd">
          <!-- <div>
            <button>选择(csv文件)</button>
            <input id="fileSelect" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" style="position:absolute;" />
          </div> -->
          <cell title='上传' class="item-value-cell">
            <div class="item-value-cell-in">
              <span>＋</span>
              <input class="input-file" type="file">
            </div>
          </cell>
          <cell title='' class="item-value-cell">
            <table class="border-table">
              <thead>
                <tr><th>姓名</th><th>手机号</th></tr>
              </thead>
              <tbody>
                <tr><td>杨成涛</td><td>13716976706</td></tr>
                <tr><td>徐天</td><td>18042402304</td></tr>
              </tbody>
            </table>
          </cell>
          
          <cell class="btn-panel">
            <button class="double-btn" @click="submitAddMember">确定</button>
            <button class="double-btn" @click="isShowAddMemberDlg=false;">取消</button>
          </cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell, CellBox, XInput, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
const _AddConsts = {
  SingleAdd:0,
  BatchAdd:1
}
export default {
  components:{
    Group,
    Cell
  },
  data () {
    return {
      title: '公司员工',
      listItems:[{
        name:'name1',
        phone:'phone1',
        isWaitCheck:true,
        isChecked:true
      },{
        name:'name1',
        phone:'phone1',
        isWaitCheck:true,
        isChecked:true
      },{
        name:'name1',
        phone:'phone1',
        isWaitCheck:false,
        isChecked:false
      },{
        name:'name1',
        phone:'phone1',
        isWaitCheck:false,
        isChecked:false
      },{
        name:'name1',
        phone:'phone1',
        isWaitCheck:false,
        isChecked:false
      },{
        name:'name1',
        phone:'phone1',
        isWaitCheck:false,
        isChecked:false
      }],

      isSelectAll:true,
      isShowAddMemberDlg:false,

      addType:_AddConsts.SingleAdd,
      AddConsts:_AddConsts
    }
  },
  mounted(){
    
  },
  methods:{
    redirectToMain(){
      this.$emit('close');
    },
    /**
     * 通过
     */
    checkMemeberPass(item){
      alert('未实现的通过')
    },
    /**
     * 不通过
     */
    checkMemeberDeny(item){
      alert('未实现的拒绝')
    },
    /**
     * 单个'选中'或'不选'
     */
    toggleSelect(item){
      item.isChecked=!item.isChecked;
    },
    /**
     * '全选' 或是 '全不选'
     */
    toggleSelectAll(){
      this.isSelectAll=!this.isSelectAll;
      for(let i = 0; i < this.listItems.length; i++){
        let item = this.listItems[i];
        if(this.isSelectAll){
          item.isChecked = true;
        }
        else{
          item.isChecked = false;
        }
      }
    },
    submitBatchPass(){//批量通过
      let ids = [];
      for(let i = 0; i < this.listItems.length; i++){
        let item = this.listItems[i];
        if(item.isChecked){
          ids.push(item.id);
        }
      }
    },

    showAddMemberDlg(){
      this.isShowAddMemberDlg = true;
    },

    submitAddMember(){

    },

    changeAddType(querySelector, addType){
      let elem = document.querySelector(querySelector);
      console.log(elem);

      if(elem.checked){
        this.addType = addType;
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/root.css';
.company-memebers{
  background-color: #4391e8;
  height: 100%;
}
header{
  width: 100%;
  height: 1.166667rem;
  padding: .4rem .386667rem 0 .2rem;
  color:var(--font-color-title);
  display: flex;
  justify-content: space-between;
  margin-bottom: .466667rem;
}
.title{
  @apply --title-levelone;
  margin-bottom: .2rem;
}

.content{
  text-align: center;
}
.mine-modules{
  padding: 0 0.5rem;
  margin-top: .6rem;
}
.rounded-rect{
  text-align:center;
  width:90%;
  background-color:white;
  display:inline-block;
  border-radius:0.5rem;
  box-shadow: 0px 0px 20px #ccc;
}
.mine-module-item{
  height:1.8rem;
  line-height:1.8rem;
  font-size:0.4rem;
  text-align: left;
  position: relative;

  border-top: solid #ededed 1px;
}
.mine-module-item:nth-child(1){
  border-top-width:0;
}

.mine-module-item-defautvalue{
  position:absolute;
  right:1rem;
  color:#4391e8;
}
.mine-module-item-text{
  margin-left: 0.3rem;
  color: black;
}

.unchecked-radio{
  height:0.8rem;
  line-height:0.8rem;
  width:0.8rem;
  border:solid #4391e8 2px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 0.16rem;
}
.checked-radio{
  background-color: #4391e8;
}
.checked-radio::after{
  content: '√';
  font-size: 0.6rem;
  margin-left: 0.15rem;
  color: white;
}
.item-button-zone{
  height:0.8rem;
  position:absolute;
  top:50%;
  margin-top:-0.4rem;
  right:0.4rem;
}
.item-button{
  color:blue;font-weight:700;
}

.border-table td,.border-table th{
  border: solid #ccc 1px;
}



.bottom-select-option{
  background-color:white;
  height:1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  background-color: white;
  color: black;
  
  vertical-align: middle;
}
.bottom-right-btn{
  float:right;margin-top:0.2rem;border-radius:0.3rem;border:solid #777 1px;padding:0.1rem 0.4rem;
}

</style>
<style src="../../assets/css/mine.css">
 
</style>