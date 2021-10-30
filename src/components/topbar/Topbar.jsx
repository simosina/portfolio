import "./topbar.scss";

export default function Topbar({ scrolled }) {
    return (
        <div className={"topbar " + (scrolled && "scrolled")}>
            <div className="wrapper">
                <a href="#main" className="left">
                    <img src="assets/logo-red.svg" alt="" />
                </a>
                <div className="right">
                    <ul className={"menu " + (scrolled && "scrolled")}>
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
                    </ul>
                    <div className="hamburger">

                    </div>
                </div>
            </div>
        </div>
    )
}