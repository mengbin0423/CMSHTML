<template>
    <div class="container">
        <h2>角色管理</h2>
        <el-button type="primary">新增角色</el-button>
        <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="关键字"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.key }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="角色名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="角色描述"
      width="300">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.description }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        key: '普通用户',
        name: 'user',
        description: '查看基础内容和部分主要功能'
      }, {
        key: '管理员',
        name: 'admin',
        description: ' 查看所有内容，可编辑所有内容'
      }, {
        key: '游客',
        name: 'visitor',
        description: '可查看基础内容'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    }
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
