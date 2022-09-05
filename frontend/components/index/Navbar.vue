<template>
  <div class="navbar">
    <div class="text-blue-600 text-xl font-bold">
      <NuxtLink to="/dashboard">
        App
      </NuxtLink>
    </div>
    <div class="flex-1"></div>
    <div>
      <el-dropdown trigger="click" @command="handleCommand">
        <el-link
          type="primary"
          :underline="false"
        >
          {{ $auth.user.username }} <IconArrowDownSLine fill="#2563EB" />
        </el-link>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">
            Logout
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleCommand(name) {
      if (name === 'logout') await this.$auth.logout();
    },
  },
};
</script>
