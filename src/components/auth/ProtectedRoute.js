// components/auth/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    } else if (allowedRoles && !allowedRoles.includes(user?.role)) {
      router.push('/unauthorized');
    }
  }, [isAuthenticated, user, router, allowedRoles]);

  if (!isAuthenticated || (allowedRoles && !allowedRoles.includes(user?.role))) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
