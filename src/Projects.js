import React, { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ReactPlayer from 'react-player'

class Projects extends Component {
    render() {
        const style = { font: "bolder", color: "red" }
        return (
            <div>
                <Navbar />
                <section>
                    <div className="bannerTwo">
                        <h2 className="projectsBanner">Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects --- Projects</h2>
                    </div>
                </section>
                <div className="projcont">
                    <div className="projectCont1">
                        <div className="projectInfo">
                            <h2><span style={style}>App Name:</span> Spotz</h2>
                            <h2>Description: An app designed for minorities and friends to find and make reservations at black owned wellness spaces and restaurants. </h2>
                            <h2>Links:
                                <a href="https://youtu.be/pRNGNh_npa0"> Demo </a> | <a href="https://github.com/Ginger-Mano/Mod2Project"> GitHub</a> </h2>
                            <ReactPlayer width="70%" height="70%" url=" https://youtu.be/pRNGNh_npa0" controls={true} />

                        </div>
                    </div>
                    <div className="projectCont1">
                        <div className="projectInfo">
                            <h2><span style={style}>App Name:</span> The Wildlife Keep</h2>
                            <h2>Description: An app for wildlife enthusiasts to get information on endangered animals and favorite them to a personalized watchlist.</h2>
                            <h2>Links:
                                <a href="https://youtu.be/pRNGNh_npa0"> Demo</a> |
                                <a href="https://github.com/Ginger-Mano/WildlifeKeep-Frontend2/blob/main/src/App.js" > Front-End</a>  |
                                <a href="https://github.com/Ginger-Mano/The-Wildlife-Keep-Backend" > Back-End</a>
                            </h2>
                            <div className="div"><ReactPlayer className="vid" width="70%" height="70%" url=" https://youtu.be/7xE0sdlucyI" controls={true} /></div>

                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}
export default Projects

// node server.js
