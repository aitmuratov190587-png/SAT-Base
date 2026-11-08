import { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

/**
 * Cosmo Notebook Tabs
 * - Underline style
 * - Active: Fraunces font with soft editorial italic, Signal Orange underline
 * - Inactive: Instrument Sans, warm graphite ink
 */
export function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div
      role="tablist"
      className={`flex items-center gap-6 border-b border-line overflow-x-auto select-none no-scrollbar ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(tab.id)}
            className={`
              relative py-3 transition-colors duration-150 flex items-center gap-2 whitespace-nowrap cursor-pointer
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]
              disabled:opacity-40 disabled:cursor-not-allowed
              ${
                isActive
                  ? 'font-display italic font-semibold text-ink text-base border-b-2 border-accent'
                  : 'font-sans font-medium text-ink-2 hover:text-ink text-sm border-b-2 border-transparent'
              }
            `}
          >
            {tab.icon && (
              <span
                className={`inline-flex shrink-0 transition-colors ${
                  isActive ? 'text-accent' : 'text-ink-muted'
                }`}
              >
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`
                  text-[10px] font-mono px-1.5 py-0.2 rounded-full border
                  ${
                    isActive
                      ? 'bg-accent/10 text-accent border-accent/20 font-bold not-italic'
                      : 'bg-paper-2 text-ink-muted border-line'
                  }
                `}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
