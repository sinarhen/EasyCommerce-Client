
import { useState, useEffect, RefObject } from 'react';

interface MousePosition {
  x: number | null;
  y: number | null;
}

const useMousePosition = (isMobile: boolean, containerRef: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const updateMousePosition = (ev: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setMousePosition({ x: ev.clientX - rect.left, y: ev.clientY - rect.top });
        }
      };

      containerRef.current.addEventListener('mousemove', updateMousePosition);

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousemove', updateMousePosition);
        }
      };
    }
  }, [isMobile, containerRef]);

  return mousePosition;
};

export default useMousePosition;