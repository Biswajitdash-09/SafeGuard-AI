import { useState, useEffect } from 'react';

export interface AnalysisHistoryItem {
  id: string;
  text: string;
  result: any;
  timestamp: number;
}

const STORAGE_KEY = 'analysis_history';
const MAX_HISTORY = 10;

export const useAnalysisHistory = () => {
  const [history, setHistory] = useState<AnalysisHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }
  }, []);

  const addToHistory = (text: string, result: any) => {
    const newItem: AnalysisHistoryItem = {
      id: Date.now().toString(),
      text: text.slice(0, 200), // Store first 200 chars
      result,
      timestamp: Date.now(),
    };

    const updated = [newItem, ...history].slice(0, MAX_HISTORY);
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const removeItem = (id: string) => {
    const updated = history.filter(item => item.id !== id);
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    history,
    addToHistory,
    clearHistory,
    removeItem,
  };
};
