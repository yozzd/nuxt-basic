<template>
  <div class="min-h-screen grid grid-cols-3 2xl:grid-cols-5 items-center">
    <div class="flex flex-col space-y-8 col-start-2 2xl:col-start-3">
      <div class="text-2xl text-center font-bold text-blue-600">
        Sign Up
      </div>

      <div class="flex space-x-2 text-gray-400">
        <div>Already have an account?</div>
        <nuxt-link to="/">
          Login
        </nuxt-link>
      </div>

      <IndexErrorHandler
        v-if="error"
        :error="error"
      />

      <IndexSuccessHandler
        v-if="success"
        :message="success"
      />

      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        :hide-required-asterisk="true"
        label-position="top"
        class="w-full"
        @submit.native.prevent="submitForm('form')"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" show-password></el-input>
        </el-form-item>
        <div class="mt-12">
          <el-button type="primary" native-type="submit" :loading="loading" class="w-full">
            Sign Up
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('This field is required'));
      } else if (value !== this.form.password) {
        callback(new Error('Password not match!'));
      } else {
        callback();
      }
    };

    return {
      loading: false,
      form: {
        username: '',
        password: '',
        confirmPassword: '',
      },
      rules: {
        username: [
          { required: true, message: 'This field is required', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'This field is required', trigger: 'blur' },
        ],
        confirmPassword: [
          { validator: validatePassword, trigger: 'blur' },
        ],
      },
      error: '',
      success: '',
    };
  },
  methods: {
    ...mapActions('signup', ['createUser']),
    submitForm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true;
            this.error = '';

            await this.createUser(this.form);
            this.success = 'Successfully create user, please login with your credentials';

            this.loading = false;
            return true;
          } catch ({ response: { data } }) {
            this.error = data;
            this.success = '';
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
