<template>
  <div class="flex flex-col space-y-8">
    <div>Example 1: Table with pagination</div>
    <div>
      <el-button
        type="primary"
        @click="showAddDialog = true"
      >
        <IconAddLine fill="#FFFFFF" />
        Add
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddDialog: false,
    };
  },
};
</script>
