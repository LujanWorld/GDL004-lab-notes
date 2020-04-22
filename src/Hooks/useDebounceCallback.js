import { useRef, useEffect } from 'react';

export default function useDebounceCallback(callback, delay) {
  const argsRef = useRef();
  const timeoutRef = useRef();

  function cleanup() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => cleanup, []);

  return [
    function debouncedCallback(...args) {
      argsRef.current = args;
      cleanup();
      timeoutRef.current = setTimeout(() => {
        if (argsRef.current) {
          callback(...argsRef.current);
        }
      }, delay);
    },
    cleanup,
  ];
}
