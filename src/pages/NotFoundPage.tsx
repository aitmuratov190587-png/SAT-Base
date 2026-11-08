import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/ui/EmptyState';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <EmptyState
        headline="Page not found"
        description="The page you are looking for does not exist, has moved, or is taking a study break with Cosmo."
        actionLabel="Back to dashboard"
        onAction={() => navigate('/')}
        mascotSrc="/images/avatar-blue.png"
        className="max-w-lg w-full"
      />
    </div>
  );
}
