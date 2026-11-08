import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Maximize2, Minimize2, Move, HelpCircle, Sparkles } from 'lucide-react';
import DesmosCalculator from '../calculator/DesmosCalculator';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ResizeDirection = 'corner' | 'right' | 'bottom';

export default function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Position & Size state
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    const defaultX = typeof window !== 'undefined' ? Math.max(20, window.innerWidth - 660) : 500;
    return { x: defaultX, y: 70 };
  });

  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 620,
    height: 500,
  });

  // Active interaction tracking in state to render the transparent pointer-events shield
  const [isDragging, setIsDragging] = useState(false);
  const [resizeDir, setResizeDir] = useState<ResizeDirection | null>(null);

  const dragStartRef = useRef<{ mouseX: number; mouseY: number; elemX: number; elemY: number }>({
    mouseX: 0,
    mouseY: 0,
    elemX: 0,
    elemY: 0,
  });

  const resizeStartRef = useRef<{ mouseX: number; mouseY: number; startW: number; startH: number }>({
    mouseX: 0,
    mouseY: 0,
    startW: 620,
    startH: 500,
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // Keep modal inside viewport when window is resized
  useEffect(() => {
    const handleWindowResize = () => {
      setPosition((prev) => {
        const maxX = Math.max(10, window.innerWidth - 150);
        const maxY = Math.max(10, window.innerHeight - 100);
        return {
          x: Math.min(prev.x, maxX),
          y: Math.min(prev.y, maxY),
        };
      });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Global mousemove and mouseup listeners for Dragging and Resizing
  useEffect(() => {
    if (!isDragging && !resizeDir) return;

    const handleMouseMove = (e: MouseEvent) => {
      // 1. DRAGGING
      if (isDragging) {
        const dx = e.clientX - dragStartRef.current.mouseX;
        const dy = e.clientY - dragStartRef.current.mouseY;

        const maxX = Math.max(10, window.innerWidth - 120);
        const maxY = Math.max(10, window.innerHeight - 80);

        const newX = Math.max(10, Math.min(maxX, dragStartRef.current.elemX + dx));
        const newY = Math.max(10, Math.min(maxY, dragStartRef.current.elemY + dy));

        setPosition({ x: newX, y: newY });
      }

      // 2. RESIZING
      if (resizeDir) {
        const dw = e.clientX - resizeStartRef.current.mouseX;
        const dh = e.clientY - resizeStartRef.current.mouseY;

        const minW = 340;
        const minH = 260;
        const maxW = Math.max(minW, window.innerWidth - position.x - 16);
        const maxH = Math.max(minH, window.innerHeight - position.y - 16);

        setSize((prev) => {
          let newW = prev.width;
          let newH = prev.height;

          if (resizeDir === 'corner' || resizeDir === 'right') {
            newW = Math.max(minW, Math.min(maxW, resizeStartRef.current.startW + dw));
          }
          if (resizeDir === 'corner' || resizeDir === 'bottom') {
            newH = Math.max(minH, Math.min(maxH, resizeStartRef.current.startH + dh));
          }

          return { width: newW, height: newH };
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setResizeDir(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, resizeDir, position.x, position.y]);

  // Touch event support for tablets
  useEffect(() => {
    if (!isDragging && !resizeDir) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];

      if (isDragging) {
        const dx = touch.clientX - dragStartRef.current.mouseX;
        const dy = touch.clientY - dragStartRef.current.mouseY;

        const maxX = Math.max(10, window.innerWidth - 120);
        const maxY = Math.max(10, window.innerHeight - 80);

        const newX = Math.max(10, Math.min(maxX, dragStartRef.current.elemX + dx));
        const newY = Math.max(10, Math.min(maxY, dragStartRef.current.elemY + dy));

        setPosition({ x: newX, y: newY });
      }

      if (resizeDir) {
        const dw = touch.clientX - resizeStartRef.current.mouseX;
        const dh = touch.clientY - resizeStartRef.current.mouseY;

        const minW = 340;
        const minH = 260;
        const maxW = Math.max(minW, window.innerWidth - position.x - 16);
        const maxH = Math.max(minH, window.innerHeight - position.y - 16);

        setSize((prev) => {
          let newW = prev.width;
          let newH = prev.height;

          if (resizeDir === 'corner' || resizeDir === 'right') {
            newW = Math.max(minW, Math.min(maxW, resizeStartRef.current.startW + dw));
          }
          if (resizeDir === 'corner' || resizeDir === 'bottom') {
            newH = Math.max(minH, Math.min(maxH, resizeStartRef.current.startH + dh));
          }

          return { width: newW, height: newH };
        });
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setResizeDir(null);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, resizeDir, position.x, position.y]);

  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (isMaximized) return;
      const rect = modalRef.current?.getBoundingClientRect();
      const currentX = rect ? rect.left : position.x;
      const currentY = rect ? rect.top : position.y;

      dragStartRef.current = {
        mouseX: clientX,
        mouseY: clientY,
        elemX: currentX,
        elemY: currentY,
      };
      setIsDragging(true);
    },
    [isMaximized, position.x, position.y]
  );

  const startResize = useCallback(
    (dir: ResizeDirection, clientX: number, clientY: number) => {
      if (isMaximized) return;
      resizeStartRef.current = {
        mouseX: clientX,
        mouseY: clientY,
        startW: size.width,
        startH: size.height,
      };
      setResizeDir(dir);
    },
    [isMaximized, size.width, size.height]
  );

  if (!isOpen) return null;

  return (
    <>
      {/* ── CRITICAL: Full-Screen Transparent Drag Shield ── */}
      {/* Prevents the Desmos iframe or any Canvas from capturing mouse events while dragging or resizing */}
      {(isDragging || resizeDir) && (
        <div
          className={`fixed inset-0 z-[9999] select-none ${
            isDragging
              ? 'cursor-move'
              : resizeDir === 'corner'
              ? 'cursor-se-resize'
              : resizeDir === 'right'
              ? 'cursor-e-resize'
              : 'cursor-s-resize'
          }`}
          style={{ background: 'transparent' }}
        />
      )}

      <div
        ref={modalRef}
        style={
          isMaximized
            ? { top: '3%', left: '3%', width: '94%', height: '94%' }
            : {
                top: `${position.y}px`,
                left: `${position.x}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
              }
        }
        className="fixed z-50 bg-surface text-ink rounded-2xl shadow-notebook border border-line overflow-hidden flex flex-col select-none"
      >
        {/* ── Top Header Bar / Drag Surface ── */}
        <div
          onMouseDown={(e) => {
            // Only drag when clicking header background or title, not action buttons
            if ((e.target as HTMLElement).closest('button, a')) return;
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
          }}
          onTouchStart={(e) => {
            if ((e.target as HTMLElement).closest('button, a')) return;
            if (e.touches.length > 0) {
              startDrag(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
          className="bg-paper-2 px-4 py-2.5 flex items-center justify-between border-b border-line cursor-move shrink-0 select-none text-ink"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-surface border border-line text-ink text-xs font-mono font-bold">
              <span>🧮</span>
              <span>Digital SAT Desmos</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-ink-2">
              <Move className="w-3.5 h-3.5 text-accent" />
              <span>Drag to move • Resize edges or corner</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Quick SAT Desmos Tips */}
            <button
              onClick={() => setShowTips(!showTips)}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                showTips ? 'bg-accent text-white shadow-xs' : 'text-ink-2 hover:text-ink hover:bg-paper'
              }`}
              title="SAT Desmos Shortcuts & Tricks"
            >
              <Sparkles className="w-3.5 h-3.5 text-mustard" />
              <span className="hidden md:inline text-[11px]">SAT Tips</span>
            </button>

            {/* Maximize / Restore */}
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-paper transition-colors"
              title={isMaximized ? 'Restore down' : 'Maximize full screen'}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-2 hover:text-berry hover:bg-paper transition-colors"
              title="Close calculator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── SAT Desmos Tips Bar ── */}
        {showTips && (
          <div className="bg-paper-2 border-b border-line px-4 py-2.5 text-xs text-ink flex flex-col gap-1 shrink-0 animate-in fade-in">
            <div className="font-bold flex items-center gap-1 text-mustard">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Digital SAT Desmos Key Strategies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mt-1 text-ink-2 font-sans">
              <div>
                • <strong>Intersections:</strong> Type both equations. Tap the grey intersection dot to find <code>(x, y)</code>.
              </div>
              <div>
                • <strong>Solve 1-Variable:</strong> Type <code>y = [left side]</code> and <code>y = [right side]</code> to find x.
              </div>
              <div>
                • <strong>Sliders:</strong> Type equations with constants (e.g. <code>y = ax + 5</code>) and add slider <code>a</code>.
              </div>
              <div>
                • <strong>Tables:</strong> Click <strong>+</strong> &gt; <strong>table</strong> to test given coordinate pairs instantly.
              </div>
            </div>
          </div>
        )}

        {/* ── Desmos Calculator Body ── */}
        {/* During drag or resize, pointer-events: none is applied to ensure iframe never steals mouse */}
        <div
          className={`flex-1 bg-white p-0 overflow-hidden relative ${
            isDragging || resizeDir ? 'pointer-events-none' : ''
          }`}
        >
          <DesmosCalculator
            height="100%"
            width="100%"
            className="border-none rounded-none w-full h-full"
          />
        </div>

        {/* ── Interactive Resize Handles (Right, Bottom, and Corner) ── */}
        {!isMaximized && (
          <>
            {/* Right edge resize handle */}
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startResize('right', e.clientX, e.clientY);
              }}
              className="absolute top-10 right-0 w-2.5 h-[calc(100%-24px)] cursor-e-resize hover:bg-accent/20 transition-colors z-40"
              title="Drag horizontally to resize width"
            />

            {/* Bottom edge resize handle */}
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startResize('bottom', e.clientX, e.clientY);
              }}
              className="absolute bottom-0 left-0 h-2.5 w-[calc(100%-24px)] cursor-s-resize hover:bg-accent/20 transition-colors z-40"
              title="Drag vertically to resize height"
            />

            {/* Bottom-Right corner resize handle with visual grip */}
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startResize('corner', e.clientX, e.clientY);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
                if (e.touches.length > 0) {
                  startResize('corner', e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              className="absolute bottom-0 right-0 w-7 h-7 cursor-se-resize flex items-end justify-end p-1 z-50 group bg-surface border-t border-l border-line hover:bg-accent rounded-tl-lg transition-colors shadow-xs"
              title="Drag corner to freely resize calculator"
            >
              {/* Visual 3-line grip handle */}
              <svg
                className="w-4 h-4 text-ink-2 group-hover:text-white transition-colors"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <line x1="14" y1="5" x2="5" y2="14" />
                <line x1="14" y1="9" x2="9" y2="14" />
                <line x1="14" y1="13" x2="13" y2="14" />
              </svg>
            </div>
          </>
        )}
      </div>
    </>
  );
}
