import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import { initGlobalErrorLogging } from './lib/logger';
import App from './App';
import './index.css';

// Initialize minimal privacy-safe error logging (disabled by default)
initGlobalErrorLogging();

// Apply the saved theme before React paints to avoid a light-to-dark flash.
try {
  const savedTheme = localStorage.getItem('satbase_theme');
  document.documentElement.classList.toggle('dark', savedTheme !== 'light');
  document.documentElement.classList.toggle('light', savedTheme === 'light');
} catch {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </StrictMode>,
);
