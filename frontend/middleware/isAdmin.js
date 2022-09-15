export default function ({ $auth }) {
  if ($auth.user.role !== 'admin') $auth.redirect('guard');
}
