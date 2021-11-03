import { useEffect, useState } from "react";
import "./about.scss";

export default function About() {

    const [activeWord, setActiveWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWord((oldActiveWord) => (oldActiveWord + 1) % 3);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about" id="about">
            <h1>About Me</h1>
            <div className="presentation">
                <h6>&#8212; Who Am I</h6>
                <div className="wrapper">
                    <div className="left">
                        <h4> I am a
                            <span className="wordsWrapper">
                                <span className={activeWord !== 0 && 'hidden'}>Front-End Developer</span>
                                <span className={activeWord !== 1 && 'hidden'}>Big Data Analyst</span>
                                <span className={activeWord !== 2 && 'hidden'}>Full Stack Developer</span>
                            </span>
                        </h4>

                        <p>Ciao, mi presento, mi chiamo Simone Sinagra. All'età di 25 anni ho conferito la laurea magistrale in Computer Engineer presso il Politecnico di Torino.
                            Durante la mia carriera universitaria ho avuto modo di sviluppare diversi progetti curriculari ed extra-curriculari, utilizzando la maggior parte delle tecnologie
                            moderne per lo sviluppo software. Amo sviluppare awesome applicazioni mobile e applicazioni per il web, ma ho anche un ottimo background nella data analysis e nei principali algoritmi di ML.
                            Ho avuto modo di fare progetti seguendo sia la metodologia agile sia waterfall, e sono pronto a mettere in pratica queste conoscenze anche in progetti più grossi.
                            Sono in continuo aggiornamento riguardo le tecnologie informatiche... E la mia curiosità mi porta a ricercare continuamente nuove opportunità. </p>
                    </div>
                    <div className="right">
                        <div className="aboutDetails">
                            <h5>Personal Details</h5>
                            <div className="separator dotted" />
                            <p><span>Name:</span> Simone Sinagra</p>
                            <p><span>Date of birth:</span> March 23, 1996</p>
                            <p><span>Languages:</span> Italian, English</p>
                        </div>
                        <div className="buttons">
                            <a href="#contact" className="button">Hire Me</a>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <h6>&#8212; What I do</h6>
                <div className="wrapper">
                    <div className="service">
                        <h5>Mobile App Development</h5>
                        <p>Android</p>
                    </div>
                    <div className="service">
                        <h5>Web Development</h5>
                        <p>single page app / fully responsive - principalmente React.js</p>
                    </div>
                    <div className="service">
                        <h5>UI/UX Design</h5>
                        <p>I’m focused on building accessible, human-centered products</p>
                    </div>
                    <div className="service">
                        <h5>Big Data Analysis</h5>
                        <p>Machine Learning</p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h6>&#8212; My skills</h6>
            </div>
        </section>
    )
}
