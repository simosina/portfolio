import "./about.scss";

export default function About() {
    return (
        <section className="about" id="about">
            <h1>About Me</h1>
            <h3>Front-End Developer & Big Data Analyst & Full Stack Developer, </h3>
            <p>I'm Simone Sinagra, sono un laureato magistrale in Computer Engineer presso il Politecnico di Torino.
                Durante la mia carriera universitaria ho avuto modo di sviluppare diversi progetti curriculari ed extra-curriculari.
                Amo sviluppare software per mobile e web, ma ho anche un ottimo background nella data analysis e nei principali algoritmi di ML.
                Sono in continuo aggiornamento riguardo le tecnologie informatiche... (game development - Unity engine)</p>

                I like building awesome software

            <ul className="info">
                <li>
                    <span>Name: </span>
                    <span>Simone Sinagra</span>
                </li>
                <li>
                    <span>Date of birth: </span>
                    <span>March 23, 1996</span>
                </li>
            </ul>
        </section>
    )
}
