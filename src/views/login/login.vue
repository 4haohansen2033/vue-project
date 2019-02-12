<template>
  <div>
  <div class="login-wrapper">
    <div class="login-container">
      <h1>采购系统<Icon type="md-analytics" /></h1>
      <Form ref="login" :model='login' :rules="loginRule">
        <FormItem prop="userName">
          <Input type='text' v-model="login.userName" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem> 
        <FormItem prop="passwrod">
          <Input type='password' v-model="login.passwrod" placeholder="用户密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type='primary' @click='userLogin("login")' long>登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        userName: "",
        password: ""
      },
      loginRule: {
        user: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入用户密码" }]
      }
    };
  },
  methods: {
    userLogin(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("登录成功");
        } else {
          this.$Message.fail("登录失败");
        }
      });
    }
  }
};
</script>
<style scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  background: url("../../static/loginbg.png");
  background-size: cover;
}
.login-container {
  padding: 30px 10px;
  position: absolute;
  width: 400px;
  height: 300px;
  background-color: #ccc;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.login-container h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>

