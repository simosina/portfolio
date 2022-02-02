import "./resume.scss";

export default function Resume() {
    return (
        <section className="resume" id="resume">
            <h2>Resume</h2>

            <div className="educations">
                <h6>&#8212; Education</h6>

                <div className="content">
                    <div className="row">
                        <div className="left">
                            <h5>Politecnico di Torino</h5>
                            <p className="period">Mar 2019 - Oct 2021</p>
                        </div>
                        <span className="verticalLine first" />
                        <div className="bullet" />
                        <div className="right">
                            <h5>Master's Degree in Computer Engineering</h5>
                            <p className="description"><strong>Thesis: </strong> <em>Behavioral analysis of an e-commerce customers to predict purchase intentions</em></p>
                            <a className="outlinedButton" href="files/thesis_slides.pdf" download>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" /></svg>
                                Slides
                            </a>
                            <p><strong>Final grade: </strong> 110/110</p>
                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>                                <p>Turin</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <h5>Politecnico di Torino</h5>
                            <p className="period">Sep 2015 - Mar 2019</p>
                        </div>
                        <span className="verticalLine" />
                        <div className="bullet" />
                        <div className="right">
                            <h5>Bachelor's Degree in Computer Engineering</h5>
                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>                                <p>Turin</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <h5>High school Albert Einstein</h5>
                            <p className="period">Sep 2010 - Jul 2015</p>
                        </div>
                        <span className="verticalLine last" />
                        <div className="bullet" />
                        <div className="right">
                            <h5>Secondary school diploma: Scientific High School, Applied Sciences option</h5>
                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>                                <p>Turin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experiences">
                <h6>&#8212; Experience</h6>
                <div className="content">
                    <div className="row">
                        <div className="left">
                            <h5>Zero11</h5>
                            <p className="period">Nov 2021 - present</p>
                        </div>
                        <span className="verticalLine first" />
                        <div className="bullet" />
                        <div className="right">
                            <h5>Front End Engineer</h5>
                            <ul>
                                <li>Worked with the UI/UX team using the sprint design methodology in order to completely rewrite the UI of a complex website.</li>
                                <li>The project was developed in React, using the Material UI library and the utility-first freamwork Tailwind CSS for creating the UI components, and Redux for managing the state.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <h5>Zero11</h5>
                            <p className="period">Mar 2021 - Oct 2021</p>
                        </div>
                        <div className="bullet" />
                        <div className="right">
                            <h5>Software Engineer Intern (Thesis)</h5>
                            <ul>
                                <li>Contributed to development of a project using Python and Neo4j (Cypher).</li>
                                <li>Responsible for the extraction of high quality information from complex web traces, in order to classify the visits of an e-commerce customers</li>
                                <li>Built an efficient ETL algorithm in Python to extract ecommerce customer visits and store them in a NoSQL database, for further data analysis.</li>
                                <li>Analyzed around 80k e-commerce customer browsing behavioral data over a 2-month period, using a Graph Technology.</li>
                            </ul>
                            <p><strong>Key achievement: </strong> Development of an algorithm capable to identify a potential online buyer when performing 10 actions, with 95% accuracy.</p>
                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>                                <p>Turin</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}
