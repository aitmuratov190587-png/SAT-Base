import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { supabase } from './lib/supabaseClient';
import { closeSiteSession, trackSiteEvent } from './lib/activityTracking';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import StudyLoadingScreen from './components/StudyLoadingScreen';
import EmptyState from './components/ui/EmptyState';
import CosmoUniversalAssistant from './components/ai/CosmoUniversalAssistant';

// Lazy-loaded routes for optimal performance and code-splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const MockTests = lazy(() => import('./pages/MockTests'));
const FlashRushMockTest = lazy(() => import('./pages/FlashRushMockTest'));
const FlashRushResults = lazy(() => import('./pages/FlashRushResults'));
const QuestionBank = lazy(() => import('./pages/QuestionBank'));
const WelcomeLanding = lazy(() => import('./pages/WelcomeLanding'));
const Analytics = lazy(() => import('./pages/Analytics'));
const StudyPlan = lazy(() => import('./pages/StudyPlan'));
const TopicPracticeArena = lazy(() => import('./pages/TopicPracticeArena'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

function ComingSoonPage({ title }: { title: string }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <EmptyState
        headline={`${title} · Coming soon`}
        description="This section is being carefully prepared for upcoming study sessions. Check back soon!"
        actionLabel="Back to dashboard"
        onAction={() => navigate('/')}
        mascotSrc="/images/avatar-blue.png"
        className="max-w-md w-full"
      />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SiteActivityTracker />
        <CosmoUniversalAssistant />
        <Suspense fallback={<StudyLoadingScreen />}>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/welcome" element={<WelcomeLanding />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Design system: only available during local development */}
            {import.meta.env.DEV && (
              <Route path="/design-system" element={<DesignSystemPage />} />
            )}

            {/* Full-screen Practice Arena */}
            <Route
              path="/practice/cross-text"
              element={
                <ProtectedRoute>
                  <TopicPracticeArena />
                </ProtectedRoute>
              }
            />
            <Route
              path="/practice/:topicId"
              element={
                <ProtectedRoute>
                  <TopicPracticeArena />
                </ProtectedRoute>
              }
            />

            {/* Full-screen Mock Test & Results */}
            <Route
              path="/mock-tests/flashrush"
              element={
                <ProtectedRoute>
                  <FlashRushMockTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mock-tests/flashrush/results"
              element={
                <ProtectedRoute>
                  <FlashRushResults />
                </ProtectedRoute>
              }
            />

            {/* Protected layout routes with AppSidebar & Topbar */}
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/questions" element={<QuestionBank />} />
              <Route path="/mock-tests" element={<MockTests />} />
              <Route path="/study-planner" element={<StudyPlan />} />
              <Route path="/study-plan" element={<StudyPlan />} />
              <Route path="/analytics" element={<Analytics />} />

              {/* Placeholder routes with friendly Cosmo Coming Soon EmptyState */}
              <Route path="/classroom" element={<ComingSoonPage title="Classroom LMS" />} />
              <Route path="/challenges" element={<ComingSoonPage title="Challenges" />} />
              <Route path="/ai-tutor" element={<ComingSoonPage title="AI Tutor" />} />
              <Route path="/saved" element={<ComingSoonPage title="Saved Questions" />} />
              <Route path="/settings" element={<ComingSoonPage title="Settings" />} />
              <Route path="/help" element={<ComingSoonPage title="Help & Guides" />} />
            </Route>

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function SiteActivityTracker() {
  const location = useLocation();
  useEffect(() => {
    void trackSiteEvent('page_view');
  }, [location.pathname]);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) void trackSiteEvent('login');
    });
    const close = () => { void closeSiteSession(); };
    window.addEventListener('pagehide', close);
    return () => {
      data.subscription.unsubscribe();
      window.removeEventListener('pagehide', close);
    };
  }, []);
  return null;
}
