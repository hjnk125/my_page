import cStyle from "./shadow_box.module.scss"
import {useMediaQuery} from "react-responsive";

function LinkButton({linkObj, width}) {
    return (
        <a className={`${cStyle["link_" + width]} font_16pt`} href={linkObj.url}>
            {linkObj.name}
            {linkObj.icon && linkObj.icon}
        </a>
    )
}

function ShadowBox({
                       width = "default",
                       shadow = "left",
                       shadowColor = "black",
                       children,
                       links
                   }) {


    const isMobile = useMediaQuery({
            query: "(max-width:680px)"
        }
    )

    const customClassName =
        `${cStyle.container} 
        ${cStyle[width]}
        ${cStyle["shadow_" + shadow]}
        ${cStyle["shadow_" + shadowColor]}`


    const renderLinks = (links) => {
        if (links.length === 1) {
            return (
                <LinkButton width={"full"} linkObj={links[0]}/>
            )
        } else if (links.length === 2) {
            return (<>
                <LinkButton width={"half"} linkObj={links[0]}/>
                <LinkButton width={"half"} linkObj={links[1]}/>
            </>)
        } else if (links.length === 3) {
            return (<>
                <LinkButton width={"full"} linkObj={links[0]}/>
                <LinkButton width={"half"} linkObj={links[1]}/>
                <LinkButton width={"half"} linkObj={links[2]}/>
            </>)
        }
    }

    return (
        <div className={`${customClassName} ${isMobile ? cStyle.mobile : cStyle.pc}`}>
            {children}

            {links && <div className={`${cStyle.link_container} ${isMobile ? cStyle.mobile : cStyle.pc}`}>
                {renderLinks(links)}
            </div>}
        </div>

    )
}

export default ShadowBox
