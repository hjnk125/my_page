import pStyle from "./projects.module.scss"
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import {FaArrowRight, FaGooglePlay, FaAppStoreIos, FaYoutube} from 'react-icons/fa';
import {useMediaQuery} from "react-responsive";
import {ScrollRotate} from 'react-scroll-rotate';

function ProjectsSection() {

    const isMobile = useMediaQuery({
        query: "(max-width:680px)"
    })

    return (<section id={"projects"} className={pStyle.projects}>
        <h1 className={"section_title"}>PROJECTS</h1>
        <h2 className={"section_subtitle"}>
            WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK
            EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE - WORK EXPERIENCE -
            WORK EXPERIENCE - WORK EXPERIENCE
        </h2>
        <div className={pStyle.projects_container}>
            <ProjectItem title={"포들리"}
                         backgroundColor={"#1d5200"}
                         imagePosition={"left"}
                         imgUrl={"/image/pawdly_landing.gif"}
                         boxTitle={<h1 className={isMobile ? "font_36pt" : "font_56pt"}>
                             <img src={"/image/pawdly_logo.png"} alt={"pawdly"}
                                  className={isMobile ? pStyle.pawdly_logo_mobile : pStyle.pawdly_logo}/>
                         </h1>}
                         boxContent={<ul
                             className={`${pStyle.projects_content} ${isMobile ? "font_14pt" : "font_16pt"}`}>
                             <li>2021.05 - 2022.06</li>
                             <li>주요 업무: 반응형 웹앱 개발(react), 디자인 컴포넌트 개발</li>
                             <li>Skills: React-Hooks, JavaScript(ES11), Vite, Zustand, Sass, jquery</li>
                             <br/>
                             <li>
                                 <b>2021.05 - 2021.09</b>: 포들리 유저 앱 프로토타입
                             </li>
                             <li>
                                 <b>2022.04 - 2022.06</b>: 포들리 유저 앱 v1
                             </li>
                         </ul>}
                         links={[{
                             name: "Visit Page", url: "https://www.pawdly.com/landing/", icon: <FaArrowRight/>
                         }]}
            />

            <div
                className={`${isMobile ? pStyle.pawdly_more_mobile : pStyle.pawdly_more} ${isMobile ? "mobile_width" : "pc_width"}`}>
                <div onClick={() => alert("준비중입니다!")}>
                    <ScrollRotate method={"perc"} loops={-0.5}>
                        <img src={"/image/pawdly_more.png"} alt={"pawdly"}/>
                    </ScrollRotate>
                </div>
            </div>

            <ProjectItem title={"포들리"}
                         backgroundColor={"#BDCBAF"}
                         imagePosition={"right"}
                         imgUrl={"/image/pawdly_partners.png"}
                         boxTitle={<h1 className={isMobile ? "font_28pt" : "font_56pt"}>
                             <img src={"/image/pawdly_partners_logo.png"} alt={"pawdly"}
                                  className={isMobile ? pStyle.pawdly_partners_logo_mobile : pStyle.pawdly_partners_logo}/>
                         </h1>}
                         boxContent={<ul
                             className={`${pStyle.projects_content} ${isMobile ? "font_14pt" : "font_16pt"}`}>
                             <li>
                                 <b>2021.10 - 2021.11</b>: 포들리 파트너스 앱 프로토타입
                             </li>
                             <li>
                                 <b>2021.12 - 2022.03</b>: 포들리 파트너스 앱 v1
                             </li>
                         </ul>}
                         links={[
                             {
                                 name: "Visit Page", url: "https://www.pawdlypartners.com/", icon: <FaArrowRight/>
                             },
                             {
                                 name: "google play",
                                 url: "https://play.google.com/store/apps/details?id=com.pawdlypartners.center",
                                 icon: <FaGooglePlay/>
                             },
                             {
                                 name: "app store",
                                 url: "https://apps.apple.com/kr/app/pawdly-partners-center/id1609215721",
                                 icon: <FaAppStoreIos/>
                             }
                         ]}
            />
        </div>

        <h2 className={"section_subtitle top"}>
            TEAM PROJECTS - TEAM PROJECTS - TEAM PROJECTS - TEAM PROJECTS - TEAM PROJECTS - TEAM PROJECTS - TEAM
            PROJECTS - TEAM PROJECTS - TEAM PROJECTS - TEAM PROJECTS -
            TEAM PROJECTS - TEAM PROJECTS
        </h2>

        <div className={pStyle.projects_container}>
            <ProjectItem title={"donforget"}
                         backgroundColor={"#322698"}
                         imagePosition={"left"}
                         imgUrl={"/image/donforget.png"}
                         boxTitle={<h1 className={isMobile ? pStyle.donforget_logo_mobile : pStyle.donforget_logo}>
                             <img src={"/image/donforget_logo.png"} alt={"donforget"}/>
                             <span className={isMobile ? "font_28pt bold" : "font_48pt"}>돈't forget</span>
                         </h1>}
                         boxContent={<ul
                             className={`${pStyle.projects_content} ${isMobile ? "font_14pt" : "font_16pt"}`}>
                             <li>코드스테이츠 파이널 프로젝트(4인)</li>
                             <li>Position: <b>Team Leader</b></li>
                             <li>Skills: ES6, React-Hooks, React-Native, Sass, AWS</li>
                         </ul>}
                         links={[
                             {
                                 name: "GitHub Wiki",
                                 url: "https://github.com/codestates/don-forget-client",
                                 icon: <FaArrowRight/>
                             },
                             {
                                 name: "Demo Day",
                                 url: "https://www.youtube.com/watch?v=hFJh9bEbUsE&ab_channel=CodeStates",
                                 icon: <FaYoutube/>
                             }
                         ]}
            />

            <ProjectItem title={"getupmate"}
                         backgroundColor={"#8456bd"}
                         imagePosition={"right"}
                         imgUrl={"/image/getupmate_proj.png"}
                         boxTitle={<h1 className={isMobile ? "font_28pt bold" : "font_48pt"}
                                       style={{textAlign: "center", marginBottom: "8px"}}>Get-up-mate</h1>}
                         boxContent={<ul
                             className={`${pStyle.projects_content} ${isMobile ? "font_14pt" : "font_16pt"}`}>
                             <li>코드스테이츠 퍼스트 프로젝트(4인)</li>
                             <li>Position: <b>Team Leader</b></li>
                             <li>Skills: ES6, React, CSS</li>
                         </ul>}
                         links={[{
                             name: "GitHub Wiki",
                             url: "https://github.com/codestates/getupmate-client",
                             icon: <FaArrowRight/>
                         }]}
            />
        </div>
    </section>)
}

export default ProjectsSection
