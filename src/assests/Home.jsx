import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
    return (
        <>  
            <Header/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;