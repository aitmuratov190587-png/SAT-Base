import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileCheck2,
  BookOpen,
  Sparkles,
  BarChart3,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Flame,
  LucideIcon,
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';

export interface AppSidebarProps {
  onOpenAITutor: () => void;
}

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

/**
 * Cosmo Notebook App Sidebar (248px desktop / 64px collapsed icon-only)
 * - Paper-2 background, 1px right border in var(--color-line)
 * - Fraunces logo: "SAT" in ink + "BASE" in accent
 * - Distinct Socratic AI Tutor top item with small spark icon
 * - 5 essential navigation items with 1.5px stroke icons
 * - Active item: ink text + hand-drawn style orange marker stroke on left (no blue/purple pills)
 * - User block with Cosmo mascot, name, and mustard flame streak
 */
export default function AppSidebar({ onOpenAITutor }: AppSidebarProps) {
  const { sidebarOpen, setSidebarOpen, profile } = useApp();
  const { signOut } = useAuth();
  const location = useLocation();

  const userName = profile?.name || 'Scholar';
  const streak = profile?.streak ?? 0;

  const navItems: NavItem[] = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/questions', label: 'Practice', icon: BookOpen },
    { path: '/mock-tests', label: 'Mock Exams', icon: FileCheck2 },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/study-plan', label: 'Study Plan', icon: Calendar },
  ];

  return (
    <aside
      className={`
        hidden md:flex fixed top-0 left-0 z-40 h-full
        bg-paper-2 border-r border-line text-ink
        transition-all duration-200 ease-in-out flex-col justify-between
        select-none font-sans overflow-hidden
        ${sidebarOpen ? 'w-[248px]' : 'w-[64px]'}
      `}
    >
      {/* Top Branding & Main Navigation */}
      <div className="flex flex-col">
        {/* Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-line bg-paper-2">
          <Link
            to="/welcome"
            title="SATBase - Return to Welcome Page"
            className={`flex items-center gap-3 group ${!sidebarOpen ? 'w-full justify-center' : ''}`}
          >
            {/* SATBase Official Brand Icon */}
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <img
                src="/images/satbase-icon.png"
                alt="SATBase"
                className="w-8 h-8 object-contain rounded-md select-none pointer-events-none group-hover:scale-105 transition-transform"
              />
            </div>

            {sidebarOpen && (
              <div className="truncate">
                <div className="flex items-center">
                  <span className="font-display font-bold text-lg tracking-tight text-ink">
                    SAT<span className="text-accent" style={{ color: 'var(--color-accent)' }}>BASE</span>
                  </span>
                </div>
                <p className="text-[11px] text-ink-2 font-sans -mt-0.5">Digital SAT Prep</p>
              </div>
            )}
          </Link>
        </div>

        {/* Distinct Socratic AI Tutor Top Item */}
        <div className="p-2 pb-1">
          <button
            onClick={() => onOpenAITutor()}
            title="Open Socratic AI Tutor"
            className={`
              w-full flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-line
              bg-surface hover:border-accent hover:text-accent transition-all duration-150 text-left
              group active:translate-y-[1px]
              ${sidebarOpen ? 'px-3 py-2' : 'p-2 justify-center'}
            `}
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0 text-accent group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            {sidebarOpen && (
              <div className="flex-1 flex items-center justify-between truncate">
                <span className="text-xs font-semibold text-ink group-hover:text-accent transition-colors truncate">
                  Socratic AI Tutor
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-paper-2 border border-line text-ink-muted group-hover:border-accent/40 group-hover:text-accent transition-colors">
                  Ask
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Primary Navigation Links */}
        <nav className="p-2 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={!sidebarOpen ? item.label : undefined}
                className={`
                  relative flex items-center gap-3 rounded-[var(--radius-sm)] text-xs
                  transition-colors duration-150 group
                  ${sidebarOpen ? 'px-3 py-2.5' : 'p-2.5 justify-center'}
                  ${
                    isActive
                      ? 'text-ink font-semibold bg-surface/80'
                      : 'text-ink-2 hover:text-ink hover:bg-surface/40'
                  }
                `}
              >
                {/* Hand-drawn style orange marker stroke on active item */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-accent rounded-r-sm"
                  />
                )}

                <item.icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? 'text-accent' : 'text-ink-2 group-hover:text-ink'
                  }`}
                  strokeWidth={1.5}
                />

                {sidebarOpen && <span className="truncate">{item.label}</span>}

                {/* Collapsed icon tooltip */}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-2.5 py-1 bg-ink text-paper text-xs rounded-[var(--radius-sm)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 shadow-notebook">
                    {item.label}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Block & Collapse Toggle */}
      <div className="p-3 border-t border-line bg-paper-2 space-y-2">
        {sidebarOpen ? (
          <div className="p-2 rounded-[var(--radius-sm)] bg-surface border border-line flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <img
                  src="/images/avatar-blue.png"
                  alt="Cosmo Mascot"
                  className="w-7 h-7 object-contain select-none pointer-events-none"
                />
              </div>
              <div className="truncate">
                <p className="text-xs font-semibold text-ink truncate leading-tight">{userName}</p>
                <div className="flex items-center gap-1 text-[11px] text-mustard font-mono mt-0.5">
                  <Flame className="w-3 h-3 text-mustard" strokeWidth={1.5} />
                  <span>{streak}d streak</span>
                </div>
              </div>
            </div>

            <button
              onClick={signOut}
              title="Sign out"
              className="p-1.5 rounded-[var(--radius-sm)] text-ink-muted hover:text-berry hover:bg-berry/10 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center shrink-0" title={`${userName} (${streak}d streak)`}>
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo Mascot"
                className="w-7 h-7 object-contain select-none pointer-events-none"
              />
            </div>
            <button
              onClick={signOut}
              title="Sign out"
              className="p-1.5 rounded-[var(--radius-sm)] text-ink-muted hover:text-berry hover:bg-berry/10 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* Desktop Collapse Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          className="hidden md:flex items-center justify-center w-full h-7 rounded-[var(--radius-sm)] text-ink-muted hover:text-ink hover:bg-surface/60 transition-all text-xs"
        >
          {sidebarOpen ? (
            <div className="flex items-center gap-1.5 text-[11px] text-ink-muted">
              <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Collapse</span>
            </div>
          ) : (
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          )}
        </button>
      </div>
    </aside>
  );
}
