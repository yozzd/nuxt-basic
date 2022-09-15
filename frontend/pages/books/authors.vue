<template>
  <BooksAuthors />
</template>

<script>
export default {
  layout: 'hm',
  middleware: ['auth', 'hasRole'],
  meta: {
    guard: 'operator',
  },
};
</script>
