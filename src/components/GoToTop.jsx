import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function GoToTop() {
    const routePath = useLocation();
    const pathname=routePath.pathname.split('?')[0]
    const pathnameProducts=pathname.split('view/')[0]
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [pathnameProducts]);
 
    return null;
}