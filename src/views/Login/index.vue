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
        <a-input v-model:value="formState.username"/>
      </a-form-item>

      <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password"/>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import {reactive} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: ''
});

const onFinish = (values: any) => {
  console.log('Success:', values);

  axios({
    url: '/mock/api/login',
    method: 'post',
    data: values
  }).then(res => {
    console.log(res.data)
    router.push('/');
  });
};

</script>

<style>
.ant-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 5em 0;
}
</style>