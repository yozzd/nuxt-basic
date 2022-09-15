export default function hasRole({ route, $auth, $config: { userRoles } }) {
  const role = (route.meta && route.meta[0].guard) ? route.meta[0].guard : null;

  if (userRoles.indexOf(role) > userRoles.indexOf($auth.user.role)) $auth.redirect('guard');
}
