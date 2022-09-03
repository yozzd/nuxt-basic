<template>
  <div>
    <el-alert
      title="Error"
      type="error"
    >
      <span>
        {{ error }}
      </span>
    </el-alert>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>
