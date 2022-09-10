<template>
  <div class="flex flex-col space-y-8">
    <div>
      <el-button
        type="primary"
        @click="showAddDialog = true"
      >
        <IconAddLine fill="#FFFFFF" />
        Add
      </el-button>
    </div>

    <BookAdd
      :show="showAddDialog"
      @close="closeAddDialog"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddDialog: false,
    };
  },
  methods: {
    closeAddDialog(value) {
      this.showAddDialog = value;
    },
  },
};
</script>
