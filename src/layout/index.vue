<template>
  <a-layout id="layout-box">
    <a-layout-header class="header">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" width="24" />
        Admin Platform
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px', paddingLeft: '24px' }"
        class="header-menu"
      >
        <a-menu-item key="1" @click='router.push("/dashboard")'>Dashboard</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
      <div class="user-setting" style="padding-right: 20px">
        <a-dropdown>
          <a class="ant-dropdown-link ant-avatar" @click.prevent>
            <a-avatar class="ant-dropdown-link">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1">
                <UserOutlined />
                个人信息
              </a-menu-item>
              <a-menu-item key="2">
                <UserOutlined />
                2nd menu item
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3" @click="signOutUser()">
                <UserOutlined />
                退出
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
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
          <a-spin :spinning="storeLoading.loadingState" :delay="300">
            <router-view />
          </a-spin>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadingStore, useUserStore } from '@/store'

const router = useRouter()

const storeLoading = useLoadingStore()
const storeUser = useUserStore()

const selectedKeys1 = ref<string[]>(['2'])
const selectedKeys2 = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
const openKeys = ref<string[]>(['sub1'])

const signOutUser = () => {
  storeUser.signOut()
  router.push('/login')
}
</script>
<style lang="scss" scoped>
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
