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
                                <span className={activeWord !== 0 ? 'hidden' : undefined}>Front-End Developer</span>
                                <span className={activeWord !== 1 ? 'hidden' : undefined}>Big Data Analyst</span>
                                <span className={activeWord !== 2 ? 'hidden' : undefined}>Full Stack Developer</span>
                            </span>
                        </h5>

                        <p>
                            Hi, I'm Simone. Let me introduce myself... In 2021, I graduated from <strong>Politecnico di Torino</strong> with a degree in <strong>Computer Engineering</strong>. During the university career I had the opportunity to work on several projects, on my own and within teams, using most of the modern technologies for software development.
                        </p>
                        <p>
                            I get a kick out of developing wonderfull <strong>mobile and web applications</strong> by adopting a human-centered design process to deliver high quality user experiences.
                            I built software following both <strong>agile</strong> and <strong>waterfall</strong> approaches, increasing my knowledge in the main techniques and tools used to support the development.
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
                <div className="quote">
                    <svg className="blockquote_start" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
                    <svg className="blockquote_end" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" /></svg>
                    <p>
                        Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.
                    </p>
                    <span>Steve Jobs</span>
                </div>
                <div className="content">
                    <div className="service">
                        <img src="assets/mobile-dev.png" alt="" />
                        <h5>Mobile App Development</h5>
                        <p>Build Android native applications & optimize the runtime performance.</p>
                    </div>
                    <div className="service">
                        <img src="assets/web-dev.png" alt="" />
                        <h5>Web Development</h5>
                        <p>Develop Traditional Web Applications and Single Page Application & design fully responsive UI.</p>
                    </div>
                    <div className="service">
                        <img src="assets/ux.png" alt="" />
                        <h5>UI/UX Design</h5>
                        <p>Build accessible, human-centered products & design satisfying and frustration-free interfaces.</p>
                    </div>
                    <div className="service">
                        <img src="assets/ml.png" alt="" />
                        <h5>Big Data Analysis</h5>
                        <p>Process, Analyze and Manage large data to unlock the value they can offer.</p>
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
                            <p>ReactJS, Angular, JavaEE, Spring Frameworks, Hibernate</p>
                        </div>
                        <div className="other">
                            <h5>Other software skills</h5>
                            <p>Jira, Git, Docker, Trello</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
