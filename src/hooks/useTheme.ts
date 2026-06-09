import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '@/types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem('theme') as Theme) ?? 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    // Add transition class before switching
    document.body.classList.add('theme-transitioning');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem('theme', theme);
    } catch { /* storage unavailable */ }

    const timer = setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 350);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
