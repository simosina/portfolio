import "./main.scss";

export default function Main() {
    return (
        <div className="main" id="main">
            <div className="left">
                <div className="wrapper">
                    <h4>Hi there, I am</h4>
                    <h1>Simone Sinagra</h1>
                    <h3>Software Engineer</h3>
                    <div className="social">
                        <a href="https://github.com/simosina96" target="_blank" rel="noreferrer">
                            <img src="assets/github.svg" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/simone-sinagra/" target="_blank" rel="noreferrer">
                            <img src="assets/linkedin.svg" alt="" />
                        </a>
                        <a href="https://www.instagram.com/simosina/" target="_blank" rel="noreferrer">
                            <img src="assets/instagram.svg" alt="" />
                        </a>
                    </div>
                    {/* social icons */}
                </div>
                {/* download cv */}
            </div>
            <div className="right">
                <img src="assets/simo.png" alt="" />
            </div>
        </div>
    )
}
