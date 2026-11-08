import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileCheck2,
  BookOpen,
  BarChart3,
  Calendar,
  LucideIcon,
} from 'lucide-react';

interface TabItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const tabItems: TabItem[] = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/questions', label: 'Practice', icon: BookOpen },
  { path: '/mock-tests', label: 'Mocks', icon: FileCheck2 },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/study-plan', label: 'Plan', icon: Calendar },
];

/**
 * Cosmo Notebook Mobile Bottom Tab Bar (<768px)
 * - 5 essential items with 1.5px stroke icons
 * - Fixed bottom navigation with paper-2 background and 1px line border
 * - Active indicator in Signal Orange
 */
export default function MobileTabBar() {
  const location = useLocation();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-paper-2/95 backdrop-blur-md border-t border-line flex items-center justify-around px-1 font-sans select-none"
    >
      {tabItems.map((item) => {
        const isActive =
          item.path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.path);

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`
              relative flex flex-col items-center justify-center flex-1 h-full py-1 text-center transition-colors duration-150
              ${isActive ? 'text-accent font-semibold' : 'text-ink-2 hover:text-ink'}
            `}
          >
            {/* Top orange marker line on active tab */}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-accent rounded-full"
              />
            )}

            <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            <span className="text-[10px] mt-1 tracking-tight leading-none">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
