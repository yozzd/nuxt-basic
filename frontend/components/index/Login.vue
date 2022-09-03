<template>
  <div class="min-h-screen grid grid-cols-2">
    <div class="bg-gray-50"></div>
    <div class="grid grid-cols-1 content-center xl:px-32 2xl:px-72">
      <div class="text-3xl font-bold text-center text-blue-600">
        App
      </div>
      <div class="grid grid-cols-1 gap-y-2 my-8 text-gray-400 text-center">
        <div>
          Welcome to <span class="text-blue-600">App</span>
        </div>
        <div>Please login with your credentials</div>
      </div>
      <IndexErrorHandler
        v-if="errors.length"
        :errors="errors"
      />
      <div>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          :hide-required-asterisk="true"
          label-position="top"
          @submit.native.prevent="submitForm('form')"
        >
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" size="large" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="form.password"
              size="large"
              show-password
              placeholder="Password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="large" native-type="submit" class="w-full">
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="flex justify-center space-x-2">
        <div class="text-gray-400">
          Don't have an account?
        </div>
        <nuxt-link to="signup">
          Sign Up
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: 'This field is required', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'This field is required', trigger: 'blur' },
        ],
      },
      errors: [],
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true;
            await this.$auth.login({
              username: this.form.username,
              password: this.form.password,
            });
            this.loading = false;
            return true;
          } catch ({ graphQLErrors, networkError }) {
            this.errors = graphQLErrors || networkError.result.errors;
            this.loading = false;
            return false;
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>
