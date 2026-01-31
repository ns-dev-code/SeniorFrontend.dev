'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'senior-frontend-bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setBookmarks(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookmarks', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const newBookmarks = prev.includes(id)
        ? prev.filter((b) => b !== id)
        : [...prev, id];
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  return { bookmarks, toggleBookmark, isBookmarked, isLoaded };
}
