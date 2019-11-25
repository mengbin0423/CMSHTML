<template>
    <div class="container">
        <h1>发布信息</h1>
        <el-input v-model="input" placeholder="请输入内容" class="inp"></el-input>
        <el-upload
            class="upload"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div>点击上传</div>
        </el-upload>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea" class="textarea">
        </el-input>
        <el-row>
            <el-button type="primary">确认发布</el-button>
            <el-button>取消</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      imageUrl: '',
      textarea: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}

</script>script
<style lang="less" scoped>
.container{
    background: #FFFFFF;
    padding:20px;
    h1{
        margin-bottom:20px;
    }
    .inp{
        width:400px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #8c939d;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .textarea{
        width:400px;
        margin-bottom: 20px;
    }
    .upload{
        width:400px;
        margin-top:20px;
        margin-bottom:20px;
    }
}
</style>
