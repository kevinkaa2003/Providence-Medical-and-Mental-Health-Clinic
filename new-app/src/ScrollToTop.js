import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0); //Reset Scroll Location On Navigating to Different Page
    }, [pathname]);

    return null;

}

export default ScrollToTop;
