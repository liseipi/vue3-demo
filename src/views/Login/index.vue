<template>
  <div class="main">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'
import LoginAPI from '@/request/api/login'
import { addRoutes } from '@/util/asyncRoutes'

const router = useRouter()
const storeUser = useUserStore()

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
})

const onFinish = async (values: any) => {
  // console.log('Success:', values)

  const result: any = await LoginAPI.postLogin(values)
  // console.log(result)
  if (result) {
    storeUser.setToken(result.token)
    storeUser.setUserInfo(result.userInfo)
    storeUser.setRoutes(result.routes)
    addRoutes(storeUser, router)
    await router.push('/dashboard')
  }
}
</script>

<style>
.ant-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 5em 0;
}
</style>
