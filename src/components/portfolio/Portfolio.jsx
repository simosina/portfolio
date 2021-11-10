import "./portfolio.scss";

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfolio</h2>

            <div className="projects">
                <h6>&#8212; My projects</h6>

                <div className="content">

                    <div className="project">
                        <div className="left">
                            <img src="assets/projects/twice-but-nice.png" alt="" />
                        </div>
                        <div className="right">
                            DESCRIPTION
                        </div>
                    </div>

                    <div className="project reverse">
                        <div className="left">
                            <img src="assets/projects/clean-kitchen.png" alt="" />
                        </div>
                        <div className="right">
                            DESCRIPTION
                            Clean Kitchen - https://clean-kitchen.web.app/
                        </div>
                    </div>

                    <div className="project">
                        <div className="left">
                            <img src="assets/projects/ai.png" alt="" />
                        </div>
                        <div className="right">
                            DESCRIPTION
                        </div>
                    </div>

                    <div className="project reverse">
                        <div className="left">
                            <img src="assets/projects/text-editor.png" alt="" />
                        </div>
                        <div className="right">
                            DESCRIPTION
                        </div>
                    </div>

                    <div className="project">
                        <div className="left">
                        </div>
                        <div className="right">
                            PORTFOLIO
                        </div>
                    </div>

                    <div className="project reverse">
                        <div className="left">
                        </div>
                        <div className="right">
                            TOBIKE
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
