<template>
    <el-container>
      <el-aside class="app-side app-side-left"
                :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'">
        <div class="app-side-logo">
          <img src="@/assets/logo.png"
               :width="isCollapse ? '60' : '60'"
               height="60" />
        </div>
        <div>
          <el-menu :default-active="$route.path"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   :collapse="isCollapse"
                   router>
                  <el-menu-item index="/keypage">
                    <i class="el-icon-folder"></i>
                    <span slot="title">首页</span>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title"><i class="el-icon-setting"></i>信息管理</template>
                    <el-menu-item-group>
                      <el-menu-item index="/mange">查看信息</el-menu-item>
                      <el-menu-item index="/modify">编辑信息</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="/sendMessage">
                    <i class="el-icon-message"></i>
                    <span slot="title">信息发布</span>
                  </el-menu-item>
                  <el-menu-item index="/stats">
                    <i class="el-icon-s-data"></i>
                    <span slot="title">数据统计</span>
                  </el-menu-item>
                  <el-submenu index='/base'>
                    <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
                    <el-menu-item-group>
                      <el-menu-item index="/base">基础权限</el-menu-item>
                      <el-menu-item index="/admin">管理员权限</el-menu-item>
                      <el-menu-item index="/switch">角色管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;"
               @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-s-fold"></i>
            <i v-show="isCollapse" class="el-icon-s-unfold"></i>
          </div>
          <div class="app-header-userinfo">
            <el-avatar shape="circle" :size="30"   :src="url"></el-avatar>
            <el-dropdown trigger="hover"
                         :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided
                                  @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      username: '',
      isCollapse: false,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    toggleSideBar () {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          sessionStorage.removeItem('user');
          this.$router.push('/login');
        })
        .catch(() => { });
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function () {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.username = user;
    } else {
      this.username = '墨痕MoHen'
    }
  }
}
</script>

<style>
.el-main{
  background: #f0f2f5;
}
</style>
