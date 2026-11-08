import { useEffect, useState } from 'react';

// Store a timestamp so throttled background tabs do not lose elapsed seconds.
export function useQuestionTimer(questionId: string, frozenSeconds?: number, enabled = true) {
  const [timer, setTimer] = useState({ id: questionId, elapsed: 0, started: Date.now(), running: true });
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    setTimer({ id: questionId, elapsed: frozenSeconds ?? 0, started: Date.now(), running: frozenSeconds === undefined });
    setNow(Date.now());
  }, [questionId, frozenSeconds, enabled]);
  useEffect(() => {
    if (!enabled || !timer.running || frozenSeconds !== undefined) return;
    const interval = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(interval);
  }, [enabled, timer.running, frozenSeconds]);
  const seconds = frozenSeconds ?? (timer.id === questionId
    ? Math.floor((timer.elapsed + (timer.running ? Math.max(0, now - timer.started) : 0)) / 1000) : 0);
  const setRunning = (running: boolean) => {
    if (frozenSeconds !== undefined) return;
    const at = Date.now();
    setTimer(prev => ({ ...prev, elapsed: prev.elapsed + (prev.running ? at - prev.started : 0), started: at, running }));
    setNow(at);
  };
  const reset = () => {
    const at = Date.now();
    setTimer({ id: questionId, elapsed: 0, started: at, running: true });
    setNow(at);
  };
  return { seconds, isTimerRunning: enabled && frozenSeconds === undefined && timer.running, setIsTimerRunning: setRunning, resetTimer: reset };
}
