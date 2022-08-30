import { useState, useEffect } from 'react';

export function useWidth(): number | void {
  /**
   * state
   */
  const [width, setWidth] = useState<number>();

  /**
   * function
   */
  const handleWidth = (get?: boolean): number | void => {
    if (get) {
      if (typeof window !== 'undefined') {
        return window.innerWidth;
      }
    }

    if (!get) {
      setWidth(window.innerWidth);
    }
  };

  /**
   * effect
   */
  useEffect(() => {
    window.addEventListener('resize', () => handleWidth());
    return () => {
      window.removeEventListener('resize', () => handleWidth());
    };
  });

  return width || handleWidth(true);
}

export default useWidth;
