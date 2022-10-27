import React from "react";
import NavBar from "./Components/NavBar";

import heroMobile from "./Assets/Images/image-intro-mobile.jpg"
import heroDesktop from "./Assets/Images/image-intro-desktop.jpg"
import bgMobileLeft from "./Assets/Images/bg-pattern-intro-left-mobile.svg"
import bgMobileRight from "./Assets/Images/bg-pattern-intro-right-mobile.svg"
// import bgDesktopLeft from "./Assets/Images/bg-pattern-intro-left-desktop.svg"
// import bgDesktopRight from "./Assets/Images/bg-pattern-intro-right-desktop.svg"

import "./Assets/Styles/Hero.scss"

function Hero(){
    return(
        <section id="hero">
    
            <NavBar />
            <img className="hero-img mobile" src={heroMobile} alt="Family with two Children" />
            <img className="hero-img desktop" src={heroDesktop} alt="Family with two Children" />
            <div className="hero-text">
                <img className="bg-left" src={bgMobileLeft} alt="" aria-hidden="true" />
                <img className="bg-right" src={bgMobileRight} alt="" aria-hidden="true" />
                <article>
                    <h1>Humanizing your insurance.</h1>
                    <p>
                        Get your life insurance coverage easier and faster. We blend our expertise and technology 
                        to help you find the plan that's right for you. Ensure you and your loved onces are protected.
                    </p>
                    <a className="cta" href=".App">View Plans</a>
                </article>
            </div>
        </section>
    )
}


export default Hero;