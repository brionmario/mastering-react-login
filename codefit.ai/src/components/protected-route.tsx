import {Navigate, RouteProps} from 'react-router';
import {useAuthContext} from '@asgardeo/auth-react';

export function ProtectedRoute({children, redirectTo}: RouteProps & {redirectTo: string}) {
  const {state} = useAuthContext();
  const {isAuthenticated, isLoading} = state;

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
}
