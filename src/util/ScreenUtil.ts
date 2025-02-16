import { useState, useEffect } from 'react';

/**
 * Calculates whether the browser is in Portrait mode.
 * @returns true if in portrait mode.
 */
function isScreenPortrait() : boolean {
    const { innerWidth: width, innerHeight: height } = window;
    return width < height;
}

/**
 * A React Hook used to track the screen mode.
 * @returns true if the screen is in portrait mode.
 */
export default function useIsScreenPortrait() {
  const [isPortrait, setIsPortrait] = useState(isScreenPortrait());

  useEffect(() => {
    function handleResize() {
        setIsPortrait(isScreenPortrait());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isPortrait;
}