import "./portfolio.scss";

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfolio</h2>

            <div className="projects">
                <h6>&#8212; My projects</h6>

                <div className="content">

                    <div className="project reverse">
                        <div className="left">
                            <img src="assets/projects/portfolio.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                    <a href="https://github.com/simosina96/portfolio" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a href="wwww.simonesinagra.com" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <h5 className="title">
                                    Personal Website
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/react.svg" alt="" />
                                <img src="assets/projects/tech/js.png" alt="" />
                                <img src="assets/projects/tech/html.png" alt="" />
                                <img src="assets/projects/tech/sass.svg" alt="" />
                                <img src="assets/projects/tech/netlify.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="left">
                            <img src="assets/projects/clean-kitchen.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                    <a href="https://github.com/simosina96/clean-kitchen" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <a href="https://clean-kitchen.web.app/" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                </div>
                                <h5 className="title">
                                    Clean Kitchen
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                    {/*With our app you will find delicious recipes to cook, but here's the twist:
                                    you will be able to use voice commands to navigate through each step of the recipe, so that you won't have to worry about having dirty hands while using your phone! */ }
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/react.svg" alt="" />
                                <img src="assets/projects/tech/js.png" alt="" />
                                <img src="assets/projects/tech/html.png" alt="" />
                                <img src="assets/projects/tech/css.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="project reverse">
                        <div className="left">
                            <img src="assets/projects/ai.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                    <a href="https://github.com/simosina96/AI-frontend" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                                <h5 className="title">
                                    University Web Portal
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                    {/*Si richiede di sviluppare una applicazione front-end, basata su Angular, per la gestione di gruppi di studenti
                                    all’interno di corsi universitari che offra all’utente più viste per le diverse funzioni, scambi dati con un
                                    servizio REST remoto e permetta l’autenticazione degli utenti.*/}
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/angular.png" alt="" />
                                <img src="assets/projects/tech/typescript.png" alt="" />
                                <img src="assets/projects/tech/html.png" alt="" />
                                <img src="assets/projects/tech/css.png" alt="" />
                                <img src="assets/projects/tech/spring.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="left">
                            <img src="assets/projects/text-editor.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                    <a href="https://github.com/simosina96/Live-Text-Editor" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                                <h5 className="title">
                                    Concurrent Text Editor
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/c++.png" alt="" />
                                <img src="assets/projects/tech/qt.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="project reverse">
                        <div className="left">
                            <img src="assets/projects/tobici.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                </div>
                                <h5 className="title">
                                    ToBici
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/android-studio.jpeg" alt="" />
                                <img src="assets/projects/tech/java.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="left">
                            <img src="assets/projects/twice-but-nice.png" alt="" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="links">
                                    <a href="https://github.com/simosina96/Twice-But-Nice" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                                <h5 className="title">
                                    Twice But Nice
                                </h5>
                                <p className="description">
                                    DESCRIPTION...
                                </p>
                            </div>
                            <div className="technologies">
                                <img src="assets/projects/tech/android-studio.jpeg" alt="" />
                                <img src="assets/projects/tech/firebase.png" alt="" />
                                <img src="assets/projects/tech/kotlin.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
