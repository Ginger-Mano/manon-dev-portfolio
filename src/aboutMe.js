import React, { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./IMG-2095.jpg"

import ScrollAnimation from 'react-animate-on-scroll';


class AboutMe extends Component {
    render() {
        return (
            <div className="aboutmain">
                <Navbar />

                <section>
                    <div className="bannerOne">
                        <h2 className="aboutBanner">About Me --- About Me --- About Me --- About Me --- About Me --- About Me --- About Me --- About Me --- About Me --- About Me --- About Me</h2>
                    </div>
                </section>


                <div className="static1"></div>

                <div className="aboutGrid1">
                    <div className="aboutPic">
                        {/* <img className="pic" alt='' src='https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3.jpg'></img> */}
                        <img className="pic" alt='' src='IMG-2095.jpg'></img>
                    </div>

                    <div>
                        <h1 className="aboutHeader">Software Engineer <br></br>and <br></br>Synesthetic Interdisciplinary <br></br>Artist</h1>
                    </div>
                </div>

                <div className="aboutPara1Div">
                    <ScrollAnimation animateIn="fadeInLeft"><h2 className="aboutPara1">Welcome! <br></br> My name is Manon. I'm a software engineer and synesthetic interdisciplinary artist with a passion for problem solving and storytelling through color, visuals, and sound. As a programmer, I think a lot about user interaction, engagement, and multisensory experiences. What I love about coding is that the possibilities are endless at the intersection of ideas and imagination. I'm a huge believer in the power of ideas and collaborating with others using effective communication to bring concepts to fruition.</h2></ScrollAnimation>
                </div>

                <div className="aboutPic2Div">
                    <img className="aboutPicDiv" alt="" src="https://miro.medium.com/max/2892/1*GHJnsutrX_nGsxWWAetYxw.jpeg"></img>

                    <div className="aboutPara2Div">
                        
                            I also believe in the power of access. Access is crucial for communities at a global scope to gain information and insights to activate their future. Technology is one of, if not the most valuable tool to empower and enlighten communities. By diversifying the tech space and allowing for creative expression, gains in knowledge to solidify experience, and teamwork for innovation, we can improve the quality of life for millions of people.
   
                    </div>
                </div>



                <div className="aboutPara3Div">
                    <h2 className="aboutPara3">In my personal life, while not working on my new interdisciplinary art series, I spend time researching, dancing, reading, listening to music, watching movies, being in nature, and hanging out.</h2>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutMe