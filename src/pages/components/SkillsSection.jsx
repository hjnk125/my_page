import sStyle from "./skills.module.scss"
import {ScrollRotate} from 'react-scroll-rotate';
import Pulse from 'react-reveal/Pulse';
import {MOBILE, PC} from "../../components/MediaQuery";

function RotateIcon({name, loops = 1}) {
    return (
        <div className={`${sStyle.skills_icon_container} ${sStyle[name]}`}>
            <ScrollRotate method={"perc"} loops={loops}>
                <img src={`/image/icons/${name}_icon.png`} alt={name}/>
            </ScrollRotate>
        </div>
    )
}

function SkillsSection() {

    const content = (container) => {
        return (
            <section id={"skills"} className={sStyle.skills}>
                <h1 className={"section_title"}>SKILLS</h1>
                <div className={sStyle[container]}>
                    <RotateIcon name={"react"} loops={3}/>
                    <RotateIcon name={"javascript"} loops={1}/>
                    <RotateIcon name={"sass"} loops={2}/>
                    <RotateIcon name={"styled_components"} loops={1.5}/>
                    <RotateIcon name={"figma"} loops={1}/>
                    <RotateIcon name={"jquery"} loops={2}/>

                    <Pulse>
                        <p className={"font_22pt"}>
                            I started developing the Front-End in 2021.
                            I create a website that is easy to use and looks beautiful, with the sense of art major.
                            I code with React.js and Vue.js, and I am ready to a project using Typescript and React-Native.
                        </p>
                    </Pulse>
                </div>
            </section>
        )
    }

    return (<>
        <PC>{content("pc")}</PC>
        <MOBILE>{content("mobile")}</MOBILE>
    </>)
}

export default SkillsSection
