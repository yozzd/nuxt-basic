<template>
  <Books />
</template>

<script>
export default {
  layout: 'hm',
  middleware: [
    'auth',
    ({ $auth }) => {
      if ($auth.user.role !== 'admin') $auth.redirect('guard');
    },
  ],
};
</script>
