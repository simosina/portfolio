import { useEffect, useState } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Topbar from "./components/topbar/Topbar";

import "./app.scss";
import ComingSoon from './comingSoon/ComingSoon';

const SCROLL_OFFSET = 80;

function App() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {


    const scrollListener = document.addEventListener("scroll", () => {
      if (window.scrollY >= SCROLL_OFFSET) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", scrollListener)
    }
  }, [])



  return (
    <div className="app">
      <div className="wrapper">
        <Topbar scrolled={scrolled} />
        <Main />
        <div className="sections">
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
      </div>
      <ComingSoon />
    </div>
  );
}

export default App;
