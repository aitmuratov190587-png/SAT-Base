import { useState, useRef, useEffect } from 'react';
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
  CreditCard,
  Crown,
  Zap,
  User,
  ArrowRight,
  MoreVertical,
  AlertCircle,
  BookMarked,
  LucideIcon,
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import ProfileModal from '../ui/ProfileModal';

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
 * - 6 navigation items including Pricing (/pricing)
 * - Dedicated Plan widget card directly above the user profile block
 * - Upward Dropup Profile Menu with profile settings & sign out
 */
export default function AppSidebar({ onOpenAITutor }: AppSidebarProps) {
  const { sidebarOpen, setSidebarOpen, profile, plan, isVip } = useApp();
  const { signOut, user } = useAuth();
  const location = useLocation();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const userName = profile?.name || 'Scholar';
  const streak = profile?.streak ?? 0;

  // Close dropup menu on outside click or Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isProfileMenuOpen) {
        setIsProfileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileMenuOpen]);

  const planBadge = isVip ? (
    <span className="px-1.5 py-0.5 rounded-full bg-mustard/20 border border-mustard/40 text-mustard font-mono font-bold text-[9px] uppercase tracking-wider">
      VIP
    </span>
  ) : plan === 'ultra_pro' ? (
    <span className="px-1.5 py-0.5 rounded-full bg-cobalt/15 border border-cobalt/30 text-cobalt font-mono font-bold text-[9px] uppercase tracking-wider">
      ULTRA
    </span>
  ) : plan === 'pro' ? (
    <span className="px-1.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono font-bold text-[9px] uppercase tracking-wider">
      PRO
    </span>
  ) : (
    <span className="px-1.5 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2 font-mono font-medium text-[9px] uppercase tracking-wider">
      FREE
    </span>
  );

  const navItems: NavItem[] = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/questions', label: 'Practice', icon: BookOpen },
    { path: '/mock-tests', label: 'Mock Exams', icon: FileCheck2 },
    { path: '/error-bank', label: 'Error Bank', icon: AlertCircle },
    { path: '/vocab', label: 'Vocab', icon: BookMarked },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/study-plan', label: 'Study Plan', icon: Calendar },
    { path: '/pricing', label: 'Pricing', icon: CreditCard },
  ];

  return (
    <>
      <aside
        className={`
          hidden md:flex fixed top-0 left-0 z-40 h-full
          bg-paper-2 border-r border-line text-ink
          transition-all duration-200 ease-in-out flex-col justify-between
          select-none font-sans overflow-visible
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
              {sidebarOpen ? (
                <div className="flex items-center py-1">
                  <img
                    src="/images/satbase-logo-full.png"
                    alt="SATBase - SAT Preparation Platform"
                    className="h-10 w-auto max-w-[185px] object-contain select-none pointer-events-none group-hover:scale-105 transition-transform dark:hidden"
                  />
                  <img
                    src="/images/satbase-logo-dark.png"
                    alt="SATBase - SAT Preparation Platform"
                    className="h-10 w-auto max-w-[185px] object-contain select-none pointer-events-none group-hover:scale-105 transition-transform hidden dark:block"
                  />
                </div>
              ) : (
                <div className="w-8.5 h-8.5 flex items-center justify-center shrink-0">
                  <img
                    src="/images/satbase-icon.png"
                    alt="SATBase"
                    className="w-8.5 h-8.5 object-contain select-none pointer-events-none group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
            </Link>
          </div>

          {/* Distinct Socratic AI Tutor Top Item */}
          <div className="p-2 pb-1">
            <button
              onClick={() => onOpenAITutor()}
              title="Ask Socratic AI Tutor"
              className={`
                w-full flex items-center gap-2.5 px-3 py-2.5 rounded-[var(--radius-sm)]
                bg-surface hover:bg-paper border border-line hover:border-accent/50
                text-ink transition-all shadow-2xs group cursor-pointer
                ${!sidebarOpen ? 'justify-center px-0' : ''}
              `}
            >
              <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                <img
                  src="/images/avatar-blue.png"
                  alt="Cosmo"
                  className="w-5.5 h-5.5 object-contain group-hover:scale-110 transition-transform select-none pointer-events-none"
                />
                <Sparkles className="w-2.5 h-2.5 text-accent absolute -top-0.5 -right-0.5 animate-pulse" />
              </div>

              {sidebarOpen && (
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs font-semibold text-ink group-hover:text-accent transition-colors flex items-center gap-1.5">
                    <span>Ask Cosmo</span>
                    <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-accent/10 text-accent font-bold">
                      AI
                    </span>
                  </span>
                  <span className="text-[10px] text-ink-muted">Socratic tutor hints</span>
                </div>
              )}
            </button>
          </div>

          {/* Core Navigation Items */}
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
                  className={`
                    relative flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)]
                    text-xs font-medium transition-colors group
                    ${isActive ? 'text-ink font-semibold' : 'text-ink-2 hover:text-ink hover:bg-surface/50'}
                    ${!sidebarOpen ? 'justify-center px-0' : ''}
                  `}
                >
                  {/* Left hand-drawn style orange marker indicator on active item */}
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

        {/* Bottom Section: Plan Card + Profile Dropup Menu + Collapse Toggle */}
        <div className="p-3 border-t border-line bg-paper-2 space-y-2.5">
          {/* 1. DEDICATED PLAN CARD (Directly above profile) */}
          {sidebarOpen ? (
            <div className="p-3 rounded-xl bg-surface border border-line shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {isVip ? (
                    <Crown className="w-3.5 h-3.5 text-mustard" />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-accent" />
                  )}
                  <span className="text-xs font-semibold text-ink">
                    {isVip ? 'VIP Creator' : plan === 'ultra_pro' ? 'Ultra Pro' : plan === 'pro' ? 'Pro Plan' : 'Free Plan'}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium text-ink-muted">
                  {isVip ? 'Unlimited' : plan === 'free' ? '$0' : plan === 'pro' ? '$5/mo' : '$20/mo'}
                </span>
              </div>
              <p className="text-[11px] text-ink-2 leading-relaxed">
                {isVip
                  ? 'All 30 mock tests & unlimited Cosmo AI active'
                  : plan === 'pro'
                  ? 'All 30 mock tests & 50 AI questions/day'
                  : plan === 'ultra_pro'
                  ? 'All 30 mock tests & 100 AI questions/day'
                  : '6 mock tests · 15 AI questions/day'}
              </p>
              <Link
                to="/pricing"
                className="flex items-center justify-center gap-1.5 w-full py-1.5 px-2.5 rounded-lg bg-paper-2 hover:bg-paper border border-line text-[11px] font-semibold text-ink hover:text-accent transition-colors shadow-2xs"
              >
                <span>{isVip ? 'View all plans' : plan === 'free' ? 'Upgrade to Pro' : 'Manage plan'}</span>
                <ArrowRight className="w-3 h-3 text-accent" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-center">
              <Link
                to="/pricing"
                title={isVip ? 'VIP Creator (Unlimited)' : 'Plans & Pricing'}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface border border-line hover:border-accent text-accent transition-all hover:scale-105 shadow-2xs"
              >
                {isVip ? <Crown className="w-4 h-4 text-mustard" /> : <Zap className="w-4 h-4 text-accent" />}
              </Link>
            </div>
          )}

          {/* 2. USER PROFILE BLOCK WITH UPWARD DROPUP MENU */}
          <div ref={profileMenuRef} className="relative">
            {/* Upward Dropup Menu */}
            {isProfileMenuOpen && (
              <div
                role="menu"
                aria-label="Profile and account actions"
                className={`absolute bottom-full mb-2 p-2 bg-surface border border-line rounded-xl shadow-notebook animate-fade-in z-50 text-xs font-sans ${
                  sidebarOpen ? 'left-0 right-0' : 'left-0 w-64'
                }`}
              >
                {/* User Info Header */}
                <div className="p-2 pb-2.5 border-b border-line">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-paper-2 border border-line shrink-0">
                      <img
                        src="/images/avatar-blue.png"
                        alt="Cosmo"
                        className="w-5.5 h-5.5 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink truncate text-xs">{userName}</p>
                      <p className="text-[10px] text-ink-muted truncate">{user?.email || 'Scholar'}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-ink-2 font-medium">Current plan:</span>
                    {planBadge}
                  </div>
                </div>

                {/* Dropup Actions */}
                <div className="py-1 space-y-0.5">
                  <Link
                    to="/pricing"
                    role="menuitem"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-ink hover:bg-paper-2 hover:text-accent transition-colors cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-accent shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="font-medium block truncate">Plans &amp; Pricing</span>
                      <p className="text-[10px] text-ink-muted truncate">30 mock exams, AI quotas &amp; tiers</p>
                    </div>
                  </Link>

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      setIsProfileModalOpen(true);
                    }}
                    className="flex items-center gap-2.5 w-full text-left px-2.5 py-2 rounded-lg text-ink hover:bg-paper-2 hover:text-accent transition-colors cursor-pointer"
                  >
                    <User className="w-4 h-4 text-ink-2 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="font-medium block truncate">My Profile</span>
                      <p className="text-[10px] text-ink-muted truncate">Name, target score &amp; exam date</p>
                    </div>
                  </button>
                </div>

                {/* Sign Out Action */}
                <div className="pt-1 border-t border-line">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      signOut();
                    }}
                    className="flex items-center gap-2.5 w-full text-left px-2.5 py-1.5 rounded-lg text-berry hover:bg-berry/10 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-medium">Sign out</span>
                  </button>
                </div>
              </div>
            )}

            {/* Profile Trigger Button */}
            {sidebarOpen ? (
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                aria-haspopup="menu"
                aria-expanded={isProfileMenuOpen}
                className="w-full text-left p-2 rounded-[var(--radius-sm)] bg-surface hover:bg-paper border border-line flex items-center justify-between shadow-2xs transition-colors cursor-pointer group"
                title="Profile &amp; account menu"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    <img
                      src="/images/avatar-blue.png"
                      alt="Cosmo Mascot"
                      className="w-7 h-7 object-contain select-none pointer-events-none"
                    />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <p className="text-xs font-semibold text-ink truncate leading-tight group-hover:text-accent transition-colors">
                        {userName}
                      </p>
                      {planBadge}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-mustard font-mono mt-0.5">
                      <Flame className="w-3 h-3 text-mustard" strokeWidth={1.5} />
                      <span>{streak}d streak</span>
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded text-ink-muted group-hover:text-ink">
                  <MoreVertical className="w-3.5 h-3.5" />
                </div>
              </button>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-8 h-8 rounded-lg bg-surface border border-line hover:border-accent flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                  title={`${userName} - Profile &amp; Plan`}
                >
                  <img
                    src="/images/avatar-blue.png"
                    alt="Cosmo Mascot"
                    className="w-6 h-6 object-contain select-none pointer-events-none"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            className="hidden md:flex items-center justify-center w-full h-7 rounded-[var(--radius-sm)] text-ink-muted hover:text-ink hover:bg-surface/60 transition-all text-xs cursor-pointer"
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

      {/* Profile Settings Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}
