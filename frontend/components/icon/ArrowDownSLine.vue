<template>
  <div class="inline-block align-text-bottom">
    <!-- eslint-disable max-len -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :width="scale * 18"
      :height="scale * 18"
    >
      <path
        fill="none"
        d="M0 0h24v24H0z"
      />
      <path
        d="M 12,13.172 16.95,8.222 18.364,9.636 12,16 5.636,9.636 7.05,8.222 Z"
        :fill="fill"
      />
    </svg>
    <!-- eslint-enable max-len -->
  </div>
</template>

<script>
export default {
  props: {
    scale: {
      type: Number,
      default: 1,
    },
    fill: {
      type: String,
      default: '#000000',
    },
  },
};
</script>
