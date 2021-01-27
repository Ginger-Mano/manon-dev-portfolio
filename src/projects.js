import React, { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ReactPlayer from 'react-player'

class Projects extends Component {
    render() {
        const video1 = "https://youtu.be/pRNGNh_npa0"
        const video2 = "https://youtu.be/7xE0sdlucyI"
        return (
            <div>
                <Navbar />
                <section>
                    <div className="bannerTwo">
                        <h2 className="projectsBanner">Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects</h2>
                    </div>
                </section>
                <div className="cont">
                    <div className="blogCont1">
                        <div className="blogInfo">
                            <h2>Spotz</h2>
                            <h2>An app designed for minorities and friends to find and make reservations at black owned wellness spaces and restaurants. </h2>
                            <ReactPlayer url="https://youtu.be/pRNGNh_npa0" controls={true} />

                        </div>
                    </div>
                    <div className="blogCont1">
                        <div className="blogInfo">
                            <h2>The Wildlife Keep</h2>
                            <h2>An app for wildlife enthusiasts to get information on endangered animals and favorite them to a personalized watchlist.</h2>
                            <ReactPlayer url="https://youtu.be/7xE0sdlucyI" controls={true} />
                            <video autoPlay="autoplay" loop="loop" muted className="video">
                                <source src={video2} type="video/mp4" />
                Your browser does not support this video tag.
            </video>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}
export default Projects