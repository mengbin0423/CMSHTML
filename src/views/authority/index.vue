<template>
<div class="container">
    <h2>基础权限</h2>
    <div style='margin-bottom:20px;'><span>当前角色：</span><span>{{user}}</span></div>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: '普通用户'
    }
  }
}
</script>
<style scoped>
    .container{
        background: #FFFFFF;
        padding:20px;
    }
</style>
