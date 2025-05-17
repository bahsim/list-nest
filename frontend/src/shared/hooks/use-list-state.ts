import { useState } from 'react';

/**
 * Generic hook for managing list state with common operations.
 * @template T - Item type
 * @param {T[]} initial - Initial list value
 * @returns {object} List state and CRUD operations
 */
export function useListState<T>(initial: T[] = []) {
  const [list, setList] = useState<T[]>(initial);

  /** Add an item to the list */
  const add = (item: T) => setList(l => [...l, item]);

  /** Remove items matching predicate */
  const remove = (predicate: (item: T) => boolean) => setList(l => l.filter(i => !predicate(i)));

  /** Update items matching predicate */
  const update = (predicate: (item: T) => boolean, updater: (item: T) => T) =>
    setList(l => l.map(i => (predicate(i) ? updater(i) : i)));

  /** Reset list to initial value */
  const reset = () => setList(initial);

  return { list, setList, add, remove, update, reset };
} 