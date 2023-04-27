import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// JavaScript component, ensuring the page automatically scrolls to the top of the page whenever the user goes to another page
const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;