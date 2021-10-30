import Scrollspy from "react-scrollspy";
import "./topbar.scss";

export default function Topbar({ scrolled }) {
    return (
        <div className={"topbar " + (scrolled && "scrolled")}>
            <div className="wrapper">
                <a href="#main" className="left">
                    <img src="assets/logo-red.svg" alt="" />
                </a>
                <div className="right">
                    <Scrollspy
                        className={"menu " + (scrolled && "scrolled")}
                        items={['main', 'about', 'resume', 'portfolio', 'contact']}
                        currentClassName="currentSection"
                        offset={-80} // topbar height = 80px
                    >
                        <li> {/* empty li for the main section */ } </li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#resume">RESUME</a>
                        </li>
                        <li>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </Scrollspy>
                    <div className="hamburger">

                    </div>
                </div>
            </div>
        </div>
    )
}