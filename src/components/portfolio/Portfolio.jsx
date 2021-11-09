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
                            <img src="assets/projects/clean-kitchen.png" alt="" />
                        </div>
                        <div className="right">
                            DESC
                        </div>
                    </div>

                    <div className="project">
                        Clean Kitchen - https://clean-kitchen.web.app/
                    </div>

                </div>
            </div>
        </section>
    )
}
