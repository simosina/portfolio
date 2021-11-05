import "./resume.scss";

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <h1>Resume</h1>
            <div className="wrapper">
                <h6>&#8212; Education</h6>
                <div className="experience">
                    <div className="left">
                        <h5>Politecnico of Turin</h5>
                        <p className="period">Mar 2019 - Oct 2021</p>
                    </div>
                    <div className="right">
                        <h5>Master's Degree in Computer Engineering</h5>
                        <p className="description">Thesis: <em>Behavioral analysis of an e-commerce customers to predict purchase intentions</em></p>
                        <a href="files/thesis_slides.pdf" download>Slides</a>
                        <p>Supervisor: De Russis L.</p>
                        <p><strong>Final grade: </strong> 110/110</p>
                        <span className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                            <p>Turin</p>
                        </span>
                    </div>
                </div>
                <div className="experience">
                    <div className="left">
                        <h5>Politecnico of Turin</h5>
                        <p className="period">Sep 2015 - Mar 2019</p>
                    </div>
                    <div className="right">
                        <h5>Bachelor's Degree in Computer Engineering</h5>
                        <span className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                            <p>Turin</p>
                        </span>
                    </div>
                </div>
                <div className="experience">
                    <div className="left">
                        <h5>High school Albert Einstein</h5>
                        <p className="period">Sep 2010 - Jul 2015</p>
                    </div>
                    <div className="right">
                        <h5>Secondary school diploma: Scientific High School, Applied Sciences option</h5>
                        <span className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                            <p>Turin</p>
                        </span>
                    </div>
                </div>
                <hr />
                <h6>&#8212; Experience</h6>
                <div className="experience">
                    <div className="left">
                        <h5>Zero11</h5>
                        <p className="period">May 2021 - Oct 2021</p>
                    </div>
                    <div className="right">
                        <h5>Student Intern - Thesis</h5>
                        <ul>
                            <li>Contributed to development of a project using Python and Neo4j (Cypher).</li>
                            <li>Responsible for the extraction of high quality information from complex web traces, in order to classify the visits of an e-commerce customers.</li>
                        </ul>
                        <p><strong>Key achievement: </strong> After a customer performs 10 actions on the website it can be classified correctly, as buyer or not, 95 times out of 100 by the developed algorithm.</p>
                        <span className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                            <p>Turin</p>
                        </span>
                    </div>
                </div>
                <div className="experience">
                    <div className="left">
                        <h5>Zero11</h5>
                        <p className="period">Mar 2021 - May 2021</p>
                    </div>
                    <div className="right">
                        <h5>Student Intern</h5>
                        <ul>
                            <li>Built an efficient ETL algorithm in Python to extract e-commerce customer visits and store them in a database.</li>
                            <li>Analyzed 76.290 e-commerce customer browsing behavioral data over a 2-month period, using a Graph Technology.</li>
                        </ul>
                        <p><strong>Key achievement: </strong> Extraction of complex, heterogeneous and unstructured data and efficient loading in a NoSQL database, for further data analysis.</p>
                        <span className="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                            <p>Turin</p>
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}
