<template>
<div class="container">
    <h2>管理员权限</h2>
    <div style='margin-bottom:20px;'><span>当前角色：</span><span>{{user}}</span></div>
    <div>
        <span>切换角色：</span>
        <el-radio-group v-model="radio1">
            <el-radio-button label="普通用户"></el-radio-button>
            <el-radio-button label="管理员"></el-radio-button>
        </el-radio-group>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      radio1: '普通用户',
      user: '管理员'
    };
  }
}
</script>
<style lang="less" scoped>
    .container{
        background: #FFFFFF;
        padding:20px;
        h2{
            margin-bottom:20px;
        }
    }
</style>
