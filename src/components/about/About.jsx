import { useEffect, useState } from "react";
import "./about.scss";

export default function About() {

    const [activeWord, setActiveWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWord((oldActiveWord) => (oldActiveWord + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <div className="profile">
                <h6>&#8212; Who Am I</h6>
                <div className="content">
                    <div className="left">
                        <h5> I am a
                            <span className="wordsWrapper">
                                <span className={activeWord !== 0 && 'hidden'}>Front-End Developer</span>
                                <span className={activeWord !== 1 && 'hidden'}>Big Data Analyst</span>
                                <span className={activeWord !== 2 && 'hidden'}>Full Stack Developer</span>
                            </span>
                        </h5>

                        <p>
                            Hi, I'm Simone. Let me introduce myself... In 2021, I graduated from the <strong>Politecnico of Torino</strong> with a degree in <strong>Computer Engineering</strong>. During the university career I had the opportunity to develop several projects, on my own and within teams, using most of the modern technologies for software development.
                        </p>
                        <p>
                            I get a kick out of developing wonderfull <strong>mobile and web applications</strong> by adopting a human-centered design process to deliver high quality user experiences.
                            I builded software following both <strong>agile</strong> and <strong>waterfall</strong> approaches, increasing my knowledge in the main techniques and tools used to support the development.
                            I also have a robust knowledge in <strong>data analysis</strong> and some <strong>Machine Learning</strong> algorithms.
                        </p>
                        <p>
                            I enjoy keeping up to date on IT changes everyday and searching continuously for new opportunitis.
                        </p>

                        <div className="buttons">
                            <a href="files/cv.pdf" className="outlinedButton m" download>Download CV</a>
                            <a href="#contact" className="button m">Contact Me</a>
                        </div>
                    </div>
                    <div className="right">
                        <img src="assets/about-simo.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className="services">
                <h6>&#8212; What I do</h6>
                <p>
                    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." - Steve Jobs
                </p>
                <div className="content">
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
                <h6>&#8212; Technical skills</h6>
                <div className="content">
                    <h5>Programming Languages</h5>
                    <div className="wrapper">
                        <div className="skill">
                            <div className="skillName">C</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">C++</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="80%" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">Java</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="90%" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">Kotlin</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="80%" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">Python</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="60%" style={{ maxWidth: '60%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">HTML/CSS</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="80%" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">JavaScript</div>
                            <div className="skillBar">
                                <div className="skillValue" percentage="85%" style={{ maxWidth: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="db">
                            <h5>Databases</h5>
                            <p>MySQL, Neo4j</p>
                        </div>
                        <div className="librariesFreamworks">
                            <h5>Libraries e Freamworks</h5>
                            <p>ReactJS, Angular, Node.js, JavaEE, Spring Frameworks, Hibernate</p>
                        </div>
                        <div className="other">
                            <h5>Other software skills</h5>
                            <p>Jira, Trello, Git, Docker</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
