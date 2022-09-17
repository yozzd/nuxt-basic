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
        d="m 13.414,14 1.768,1.768 -1.414,1.414 L 12,15.414 10.232,17.182 8.818,15.768 10.586,14 8.818,12.232 10.232,10.818 12,12.586 l 1.768,-1.768 1.414,1.414 z"
        :fill="fill"
      />
      <path
        d="m 17,6 h 5 v 2 h -2 v 13 a 1,1 0 0 1 -1,1 H 5 A 1,1 0 0 1 4,21 V 8 H 2 V 6 H 7 V 3 A 1,1 0 0 1 8,2 h 8 a 1,1 0 0 1 1,1 z m 1,2 H 6 V 20 H 18 Z M 9,4 v 2 h 6 V 4 Z"
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
