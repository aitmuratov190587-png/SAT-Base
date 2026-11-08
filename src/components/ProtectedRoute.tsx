import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import StudyLoadingScreen from './StudyLoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <StudyLoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
}
