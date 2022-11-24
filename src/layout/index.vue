<template>
  <a-layout id='layout-box'>
    <a-layout-header class='header'>
      <div class='logo'>
        <img src='@/assets/images/logo.svg' alt='logo' width='24' />
        Admin Platform
      </div>
      <a-menu
        v-model:selectedKeys='selectedKeys1'
        theme='dark'
        mode='horizontal'
        :style="{ lineHeight: '64px', paddingLeft: '24px' }"
        class='header-menu'
      >
        <a-menu-item key='1' @click="router.push('/dashboard')"
        >Dashboard
        </a-menu-item
        >
        <a-menu-item key='2'>nav 2</a-menu-item>
        <a-menu-item key='3'>nav 3</a-menu-item>
      </a-menu>
      <div class='user-setting' style='padding-right: 20px'>
        <a-dropdown>
          <a class='ant-dropdown-link ant-avatar' @click.prevent>
            <a-avatar class='ant-dropdown-link'>
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key='1'>
                <UserOutlined />
                个人信息
              </a-menu-item>
              <a-menu-item key='2'>
                <UserOutlined />
                2nd menu item
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key='3' @click='signOutUser()'>
                <UserOutlined />
                退出
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-layout-header>

    <a-layout>
      <a-layout-sider width='200' style='background: #fff'>
        <SideMenu />
      </a-layout-sider>
      <a-layout style='padding: 0 24px 24px'>
        <a-breadcrumb style='margin: 16px 0'>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px'
          }"
        >
          <a-spin :spinning='storeLoading.loadingState' :delay='300'>
            <router-view />
          </a-spin>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang='ts' setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute, RouteRecordName } from 'vue-router'
import { useLoadingStore, useUserStore } from '@/store'
import { clearRoutes } from '@/util/asyncRoutes'
import SideMenu from '@/layout/modules/SideMenu.vue'

const router = useRouter()
const storeLoading = useLoadingStore()
const storeUser = useUserStore()

const selectedKeys1 = ref<string[]>(['2'])
const collapsed = ref<boolean>(false)

const signOutUser = () => {
  storeUser.signOut()
  clearRoutes(storeUser, router)
  router.push('/login')
}
</script>

<style lang='scss' scoped>
#layout-box {
  height: 100vh;

  .header {
    padding: 0;
    display: flex;
  }

  .logo {
    transition: all 0.3s;
    color: #fff;
    font-size: 18px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
    width: 200px;
    text-align: center;
  }

  .header-menu {
    flex-grow: 1;
  }

  .user-setting {
    color: #fff;
    line-height: 64px;
  }
}
</style>
