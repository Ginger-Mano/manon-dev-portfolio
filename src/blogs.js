import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Blogs() {
    return (
        <div>
            <Navbar />
            <section>
                <div className="bannerThree">
                    <h2 className="blogsBanner">Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs --- Blogs</h2>
                </div>
            </section>
            <div className="cont">
                <div className="blogCont1">
                    <div className="blogInfo">
                        <h2>The Wildlife Keep</h2>
                        <h2>The Wildlife Keep</h2>
                        <img src="https://youtu.be/zQyrwxMPm88"></img>
                    </div>
                </div>
                <div className="blogCont1">
                    <div className="blogInfo">
                        <h2>The Wildlife Keep</h2>
                        <h2>The Wildlife Keep</h2>
                        <img src="https://youtu.be/zQyrwxMPm88"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Blogs