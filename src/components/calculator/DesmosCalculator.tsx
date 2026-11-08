import { useState, useEffect, useRef } from 'react';
import { Loader2, RefreshCw, ExternalLink } from 'lucide-react';

interface DesmosCalculatorProps {
  height?: string;
  width?: string;
  className?: string;
}

// Official College Board SAT Desmos testing mode
const CB_SAT_DESMOS_URL = 'https://www.desmos.com/testing/cb-sat/graphing';

export default function DesmosCalculator({
  height = '500px',
  width = '100%',
  className = '',
}: DesmosCalculatorProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Guarantee loading state never hangs longer than 2.5 seconds
  useEffect(() => {
    setIsLoading(true);
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(safetyTimer);
  }, [iframeKey]);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      className={`relative w-full h-full bg-surface overflow-hidden flex flex-col ${className}`}
      style={{ width, height, minHeight: 0 }}
    >
      {/* ── Optional Quick Sub-bar ── */}
      <div className="bg-paper-2 border-b border-line px-3 py-1.5 flex items-center justify-between text-[11px] text-ink-2">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-moss animate-pulse"></span>
          <span>Official College Board SAT Desmos</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            className="flex items-center gap-1 text-ink-3 hover:text-ink transition-colors"
            title="Reset calculator"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <a
            href={CB_SAT_DESMOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:text-accent-hover font-medium transition-colors"
            title="Open in new window"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">Full Window</span>
          </a>
        </div>
      </div>

      {/* ── Loading Spinner Overlay ── */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface/95 text-ink-2 gap-3 backdrop-blur-xs transition-opacity duration-200">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-2">
            Loading Official SAT Desmos...
          </div>
        </div>
      )}

      {/* ── Official College Board SAT Desmos IFrame ── */}
      <iframe
        key={iframeKey}
        ref={iframeRef}
        src={CB_SAT_DESMOS_URL}
        title="Official College Board Digital SAT Desmos Graphing Calculator"
        className="w-full flex-1 border-0"
        allow="clipboard-read; clipboard-write"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
