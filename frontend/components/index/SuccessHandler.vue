<template>
  <div>
    <el-alert
      title="Success"
      type="success"
    >
      <span>
        {{ message }}
      </span>
    </el-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
