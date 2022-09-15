<template>
  <Books />
</template>

<script>
export default {
  layout: 'hm',
  middleware: ['auth', 'isAdmin'],
};
</script>
