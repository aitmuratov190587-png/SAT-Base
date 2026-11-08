import React, { useMemo, useState, useEffect } from 'react';

declare global {
  interface Window {
    katex?: {
      renderToString: (
        tex: string,
        options?: {
          displayMode?: boolean;
          throwOnError?: boolean;
          output?: 'html' | 'mathml' | 'htmlAndMathml';
        }
      ) => string;
    };
  }
}

let katexLoadPromise: Promise<void> | null = null;

/**
 * Dynamically loads KaTeX assets on-demand only when a math component is mounted.
 * Keeps initial bundle and non-math pages lean and fast.
 */
export function loadKatexOnDemand(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.katex) return Promise.resolve();
  if (katexLoadPromise) return katexLoadPromise;

  katexLoadPromise = new Promise((resolve) => {
    if (!document.getElementById('katex-css')) {
      const link = document.createElement('link');
      link.id = 'katex-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
      document.head.appendChild(link);
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return katexLoadPromise;
}

interface KatexMathProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Cleanly renders math equations via KaTeX if available on window,
 * with a graceful typographic fallback in Fraunces/serif styling.
 */
export default function KatexMath({ math, displayMode = false, className = '' }: KatexMathProps) {
  const [katexLoaded, setKatexLoaded] = useState(
    typeof window !== 'undefined' && Boolean(window.katex)
  );

  useEffect(() => {
    if (!katexLoaded) {
      loadKatexOnDemand().then(() => {
        if (typeof window !== 'undefined' && window.katex) {
          setKatexLoaded(true);
        }
      });
    }
  }, [katexLoaded]);

  const renderedHtml = useMemo(() => {
    if (typeof window === 'undefined' || !window.katex) {
      return null;
    }
    try {
      // Normalise raw math: clean out outer dollar signs if any
      const cleaned = math.trim().replace(/^\$+/, '').replace(/\$+$/, '');
      return window.katex.renderToString(cleaned, {
        displayMode,
        throwOnError: false,
      });
    } catch {
      return null;
    }
  }, [math, displayMode, katexLoaded]);

  if (renderedHtml) {
    return (
      <span
        className={`inline-block ${displayMode ? 'my-2 block text-center' : ''} ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  // Graceful fallback with mathematical typography
  return (
    <span
      className={`font-serif tracking-normal text-ink select-text ${
        displayMode ? 'block text-center text-lg my-2 font-medium' : 'inline'
      } ${className}`}
    >
      {math}
    </span>
  );
}

/**
 * Helper to render mixed text that may contain $...$ or $...$ LaTeX expressions,
 * or raw equation lines.
 */
export function FormattedMathText({ text, className = '' }: { text: string; className?: string }) {
  const parts = useMemo(() => {
    // If text contains $...$, split on it
    if (text.includes('$')) {
      const tokens = text.split(/(\$[^$]+\$)/g);
      return tokens.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const expr = part.slice(1, -1);
          return <KatexMath key={i} math={expr} displayMode={false} />;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      });
    }
    return text;
  }, [text]);

  return <span className={className}>{parts}</span>;
}
