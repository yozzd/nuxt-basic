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
        d="M 11,11 V 5 h 2 v 6 h 6 v 2 h -6 v 6 H 11 V 13 H 5 v -2 z"
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
