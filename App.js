import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
// import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Testimonials1 from "./components/testimonials1/Testimonials1";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        {/* <Resume /> */}
        <Portfolio />
        <Pricing />
        <Testimonials1 />
        <Blog />

        <Contact />
      </main>
    </>
  );
}

export default App;
