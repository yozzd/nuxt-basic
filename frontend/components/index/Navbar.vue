<template>
  <div class="navbar">
    <div class="text-blue-600 text-xl font-bold">
      <NuxtLink to="/dashboard">
        App
      </NuxtLink>
    </div>
    <div class="flex-1"></div>
    <div class="flex space-x-2">
      <el-dropdown
        v-if="$auth.user.role === 'admin'"
        trigger="click"
        @command="handleManage"
      >
        <el-link
          type="primary"
          :underline="false"
        >
          Manage <IconsArrowDownSLine fill="#2563EB" />
        </el-link>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="books">
            Book
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
      <el-dropdown trigger="click" @command="handleCommand">
        <el-link
          type="primary"
          :underline="false"
        >
          {{ $auth.user.username }} <IconsArrowDownSLine fill="#2563EB" />
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
    async handleCommand(command) {
      if (command === 'logout') await this.$auth.logout();
    },
    handleManage(name) {
      this.$router.push({ name });
    },
  },
};
</script>
