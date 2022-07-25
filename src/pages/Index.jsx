import {useState} from "react";
import hStyle from "../css/home.module.scss"
import {Link} from "react-scroll";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import {FaArrowRight} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {MOBILE, PC} from "../components/MediaQuery";
import Fade from 'react-reveal/Fade';

function Home() {

    const [openList, setOpenList] = useState(false)

    return (
        <div className={hStyle.Home}>
            <nav className={hStyle.nav_bar}>
                <PC>
                    <div className={`${hStyle.nav_bar_pc} pc_width`}>
                        <h1 className={`${hStyle.logo} font_32pt bold`}>HOJUNG KIM</h1>
                        <ul className={`${hStyle.nav_links} font_18pt bold`}>
                            <li>
                                <Link activeClass={""} smooth spy to="skills" offset={-64}>SKILLS</Link>
                            </li>
                            <li>
                                <Link activeClass={""} smooth spy to="projects" offset={-64}>PROJECTS</Link>
                            </li>
                        </ul>
                        <a className={`${hStyle.contact} font_18pt bold`}
                           href="https://mail.google.com/mail/?view=cm&fs=1&to=hjnk125@gmail.com">
                            CONTACT
                            <FaArrowRight/>
                        </a>
                    </div>
                </PC>

                <MOBILE>
                    <div className={`${hStyle.nav_bar_mobile} mobile_width`}>
                        <div className={`${hStyle.nav_bar_summary}`}>
                            <h1 className={`${hStyle.logo} font_28pt bold`}>HOJUNG KIM</h1>
                            <button className={`${hStyle.menu_icon}`}
                                    onClick={() => {
                                        setOpenList(!openList)
                                    }}>
                                <FiMenu/>
                            </button>
                        </div>

                        <ul className={`${hStyle.nav_bar_list} font_16pt bold`}>
                            <Fade top cascade collapse when={openList}>
                                <li>
                                    <Link activeClass={""} smooth spy to="skills" offset={-64}>SKILLS</Link>
                                </li>
                                <li>
                                    <Link activeClass={""} smooth spy to="projects" offset={-64}>PROJECTS</Link>
                                </li>
                            </Fade>
                        </ul>
                    </div>
                </MOBILE>
            </nav>

            <IntroSection/>

            <SkillsSection/>

            <ProjectsSection/>
        </div>
    )
}

export default Home
