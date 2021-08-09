import { useLocation } from 'react-router-dom';


function usePathname() {
  const location = useLocation();

  return {
    isActive: (pathname) => location.pathname === pathname,
  };
}

export default usePathname;
