import { useEffect } from 'react';
import { withRouter } from 'next/router';

const ScrollToTop = ({ children, router: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
