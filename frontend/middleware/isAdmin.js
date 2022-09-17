export default function isAdmin({ $auth }) {
  if ($auth.user.role !== 'admin') $auth.redirect('guard');
}
