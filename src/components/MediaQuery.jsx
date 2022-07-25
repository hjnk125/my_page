import React from "react"
import {useMediaQuery} from "react-responsive"

/*
    Mobile (Smartphone) max-width: 480px
    Low Resolution Tablets and ipads max-width: 767px
    Tablets Ipads portrait mode max-width:1024px
    Desktops max-width:1280px
    Huge size (Larger screen) max-width: 1281px and greater
* */

const MOBILE = ({children}) => {
    const isMobile = useMediaQuery({
            query: "(max-width:680px)"
        }
    );
    return <React.Fragment>{isMobile && children}</React.Fragment>
}
const PC = ({children}) => {
    const isTablet = useMediaQuery({
        query: "(min-width:680px)"
    });
    return <React.Fragment>{isTablet && children}</React.Fragment>
}
export {MOBILE, PC};
