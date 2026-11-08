import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import CosmoLauncher from '../mascot/CosmoLauncher';
import AITutorDrawer from './AITutorDrawer';

export interface CosmoUniversalAssistantProps {
  className?: string;
}

/**
 * CosmoUniversalAssistant
 *
 * Global AI Assistant interface providing:
 * - Floating action launcher (CosmoLauncher) placed at `bottom-20 md:bottom-6 right-4 sm:right-6 z-40`
 *   to ensure zero collision with MobileTabBar (h-16, 64px) on mobile viewports.
 * - Integration with useApp context state (`isAITutorOpen`, `openAITutor`, `closeAITutor`, `tutorContext`).
 * - Active route quiet mode detection: sets Cosmo to 'sleeping' on `/mock-tests/flashrush`.
 * - Global Alt+C keyboard shortcut to open/close assistant.
 * - Central mount point for AITutorDrawer across all routes.
 */
export const CosmoUniversalAssistant: React.FC<CosmoUniversalAssistantProps> = ({
  className = '',
}) => {
  const {
    isAITutorOpen,
    openAITutor,
    closeAITutor,
    tutorContext,
    tutorInitialMessage,
  } = useApp();

  const location = useLocation();

  // Quiet mode detection: When on /mock-tests/flashrush (excluding results view)
  const isFlashrushExam =
    location.pathname.startsWith('/mock-tests/flashrush') &&
    !location.pathname.includes('/results');

  // Global Alt+C shortcut to toggle assistant
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        if (isFlashrushExam) return;
        if (isAITutorOpen) {
          closeAITutor();
        } else {
          openAITutor({ mode: 'general' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAITutorOpen, closeAITutor, openAITutor, isFlashrushExam]);

  return (
    <>
      {/* Floating Action Launcher
          Responsive positioning: bottom-20 (80px) on mobile (<768px) to safely clear MobileTabBar (64px),
          and bottom-6 (24px) on desktop (>=768px).
          Hidden when drawer is open to eliminate screen obstruction.
      */}
      {!isAITutorOpen && (
        <div
          className={`fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 transition-transform duration-200 ${className}`}
        >
          <CosmoLauncher
            state={isFlashrushExam ? 'sleeping' : 'idle'}
            isOpen={false}
            onClick={() => {
              if (isFlashrushExam) return;
              openAITutor({ mode: 'general' });
            }}
          />
        </div>
      )}

      {/* Central Universal Cosmo AI Assistant Drawer */}
      <AITutorDrawer
        isOpen={isAITutorOpen}
        onClose={closeAITutor}
        context={tutorContext}
        initialMessage={tutorInitialMessage}
      />
    </>
  );
};

export default CosmoUniversalAssistant;
