import { useState, useRef, useEffect, useCallback } from 'react';
import { X, BookOpen, Move } from 'lucide-react';
import MathReferencePanel from '../practice/MathReferencePanel';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdvancedMath?: boolean;
  topicName?: string;
}

export default function ReferenceModal({
  isOpen,
  onClose,
  isAdvancedMath = false,
  topicName,
}: ReferenceModalProps) {
  const [position, setPosition] = useState<{ x: number; y: number }>(() => ({
    x: 40,
    y: 75,
  }));
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef<{ mouseX: number; mouseY: number; elemX: number; elemY: number }>({
    mouseX: 0,
    mouseY: 0,
    elemX: 40,
    elemY: 75,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStartRef.current.mouseX;
      const dy = e.clientY - dragStartRef.current.mouseY;

      const maxX = Math.max(10, window.innerWidth - 120);
      const maxY = Math.max(10, window.innerHeight - 80);

      const newX = Math.max(10, Math.min(maxX, dragStartRef.current.elemX + dx));
      const newY = Math.max(10, Math.min(maxY, dragStartRef.current.elemY + dy));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = useCallback((clientX: number, clientY: number) => {
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
  }, [position.x, position.y]);

  if (!isOpen) return null;

  return (
    <>
      {/* Full-screen drag shield while dragging */}
      {isDragging && (
        <div
          className="fixed inset-0 z-[9999] cursor-move select-none"
          style={{ background: 'transparent' }}
        />
      )}

      <div
        ref={modalRef}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        className="fixed z-50 w-[520px] max-w-[calc(100vw-24px)] max-h-[85vh] bg-surface text-ink rounded-2xl shadow-notebook border border-line flex flex-col overflow-hidden select-none"
      >
        {/* ── Top Header / Drag Bar ── */}
        <div
          onMouseDown={(e) => {
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
          className="px-4 py-3 bg-paper-2 border-b border-line flex items-center justify-between cursor-move shrink-0 select-none text-ink"
        >
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-surface border border-line text-accent">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="font-bold text-sm">Official SAT Math Reference Sheet</span>
            <span className="hidden sm:flex items-center gap-1 text-[10px] text-ink-2 font-mono">
              <Move className="w-3.5 h-3.5 text-accent" />
              <span>Drag anywhere</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-ink-2 hover:text-berry hover:bg-paper transition-colors"
            title="Close Reference Sheet"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Reference Content Scroll Area ── */}
        <div
          className={`flex-1 overflow-y-auto p-4 space-y-4 select-text ${
            isDragging ? 'pointer-events-none' : ''
          }`}
        >
          <MathReferencePanel
            isAdvancedMath={isAdvancedMath}
            topicName={topicName}
          />
        </div>
      </div>
    </>
  );
}
