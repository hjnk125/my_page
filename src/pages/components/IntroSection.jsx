import iStyle from "./intro.module.scss"
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import {useMediaQuery} from "react-responsive";

function IntroSection() {

    const isMobile = useMediaQuery({
            query: "(max-width:680px)"
        }
    )

    return (
        <section className={iStyle.intro}>
            <div className={isMobile ? "mobile_width" : "pc_width"}>
                <ShadowBox width={"wide"} shadow={isMobile ? "left" : "right"} shadowColor={"white"}>
                    <h1 className={isMobile ? "font_48pt" : "font_56pt"}>
                        Hello World!
                    </h1>
                    <p className={isMobile ? "font_18pt" : "font_22pt"}>
                        I'm Hojung Kim, a Front-End Developer from Seoul.
                        I code responsive and cross browser websites using Javascript.
                    </p>
                </ShadowBox>
            </div>
        </section>
    )
}

export default IntroSection
