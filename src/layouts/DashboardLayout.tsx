import { Outlet, useLocation } from 'react-router-dom';
import AppSidebar from '../components/navigation/AppSidebar';
import AppHeader from '../components/navigation/AppHeader';
import MobileTabBar from '../components/navigation/MobileTabBar';
import { useApp } from '../contexts/AppContext';
import StudyLoadingScreen from '../components/StudyLoadingScreen';

export default function DashboardLayout() {
  const {
    sidebarOpen,
    profileLoading,
    openAITutor,
  } = useApp();
  const location = useLocation();

  if (profileLoading) {
    return <StudyLoadingScreen />;
  }

  return (
    <div className="dashboard-layout min-h-screen bg-paper text-ink flex flex-col font-sans transition-colors duration-200">
      {/* Cosmo Notebook Desktop Sidebar (248px / 64px) */}
      <AppSidebar onOpenAITutor={() => openAITutor({ mode: 'general' })} />

      {/* Main Container Area */}
      <div
        className={`
          flex-1 flex flex-col transition-all duration-200 ease-in-out min-h-screen
          ${sidebarOpen ? 'md:ml-[248px]' : 'md:ml-[64px]'}
        `}
      >
        {/* Cosmo Notebook Top Bar */}
        <AppHeader onOpenAITutor={() => openAITutor({ mode: 'general' })} />

        {/* Page Content Outlet with 200ms page transition and mobile bottom padding */}
        <main
          key={location.pathname}
          className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1480px] mx-auto w-full page-transition pb-24 md:pb-8 flex flex-col"
        >
          <div className="flex-1">
            <Outlet />
          </div>
          {/* Mobile spacing reserve matching tab bar height */}
          <div className="h-16 md:hidden shrink-0 pointer-events-none" aria-hidden="true" />
        </main>
      </div>

      {/* Mobile Bottom Tab Bar (<768px) */}
      <MobileTabBar />
    </div>
  );
}
