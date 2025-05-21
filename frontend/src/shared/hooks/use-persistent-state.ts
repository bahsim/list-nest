/**
 * usePersistentState - React state hook synced with localStorage.
 * @template T
 * @param key {string} - localStorage key
 * @param initial {T} - initial value if nothing in storage
 * @returns {[T, (v: T | ((prev: T) => T)) => void]} - state and setter (supports functional updates)
 */
import { useState, useEffect } from 'react';
import { localStorageUtil } from '@/shared/utils/local-storage';

export const usePersistentState = <T>(
  key: string,
  initial: T,
): [T, (v: T | ((prev: T) => T)) => void] => {
  const [state, setState] = useState<T>(() => localStorageUtil.get<T>(key, initial) ?? initial);

  const setPersistentState = (value: T | ((prev: T) => T)) => {
    setState((prev) => {
      const next = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
      return next;
    });
  };

  useEffect(() => {
    localStorageUtil.set(key, state);
  }, [key, state]);

  return [state, setPersistentState];
};
