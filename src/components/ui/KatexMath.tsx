import React, { useMemo } from 'react';

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
  }, [math, displayMode]);

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
