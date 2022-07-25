import cStyle from "./project_item.module.scss"
import Fade from 'react-reveal/Fade';
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import {MOBILE, PC} from "../MediaQuery";

function ProjectItem({
                         title,
                         backgroundColor,
                         imagePosition = "left",
                         imgUrl,
                         boxTitle,
                         boxContent,
                         links
                     }) {

    return (<>
            <PC>
                {(imagePosition === "left") ?
                    <div className={`${cStyle.projects_item} ${cStyle.pc} pc_width`} style={{background: backgroundColor}}>
                        <Fade bottom>
                            <img className={cStyle.projects_image} src={imgUrl} alt={title}/>
                            <ShadowBox shadow={"left"} shadowColor={"black"} links={links}>
                                {boxTitle && boxTitle}
                                {boxContent && boxContent}
                            </ShadowBox>
                        </Fade>
                    </div>
                    : <div className={`${cStyle.projects_item} ${cStyle.pc} pc_width`} style={{background: backgroundColor}}>
                        <Fade bottom>
                            <ShadowBox shadow={"right"} shadowColor={"black"} links={links}>
                                {boxTitle && boxTitle}
                                {boxContent && boxContent}
                            </ShadowBox>
                            <img className={cStyle.projects_image} src={imgUrl} alt={title}/>
                        </Fade>
                    </div>}
            </PC>
            <MOBILE>
                <div className={`${cStyle.projects_item} ${cStyle.mobile} mobile_width`} style={{background: backgroundColor}}>
                    <Fade bottom>
                        <img className={cStyle.projects_image} src={imgUrl} alt={title}/>
                        <ShadowBox shadow={imagePosition} shadowColor={"black"} links={links}>
                            {boxTitle && boxTitle}
                            {boxContent && boxContent}
                        </ShadowBox>
                    </Fade>
                </div>
            </MOBILE>
        </>

    )

}

export default ProjectItem
