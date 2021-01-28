import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"


const style = { font: "bolder", color: "purple" }

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
                        <h2><span style={style}>Name:</span> Applying Basic Destructuring in React</h2>

                        <h2>Link:
                                <a href="https://medium.com/javascript-in-plain-english/applying-basic-destructuring-in-react-ede119aab03e"> Blog </a> </h2>
                        <img className="blogIG" alt="" src="https://miro.medium.com/max/1600/1*-ezOyzYWgZnBHJ7p-qT43A.gif"></img>
                    </div>
                </div>
                <div className="blogCont1">
                    <div className="blogInfo">
                        <h2><span style={style}>Name:</span> A Brief. Intro to Color Theory</h2>

                        <h2>Link:
                             <a href="https://mcasimirian.medium.com/a-brief-intro-to-color-theory-f25fd3479bd2"> Blog </a> </h2>
                        <img className="blogIG" alt="" src="https://miro.medium.com/max/1000/1*xaSydwj9PfrrdV1DSFfH8w.gif"></img>
                    </div>
                </div>
            </div>

            <div className="cont">
                <div className="blogCont1">
                    <div className="blogInfo">
                        <h2><span style={style}>Name:</span> The Basics of JSX in React.js</h2>

                        <h2>Link:
                                <a href="https://mcasimirian.medium.com/the-basics-of-using-jsx-in-react-js-578db41ec625"> Blog </a> </h2><br></br>
                        <img className="blogIG" alt="" src="https://miro.medium.com/max/960/1*jcyp66zO_oLOAZbTY4a-vQ.gif"></img>
                    </div>
                </div>
                <div className="blogCont1">
                    <div className="blogInfo">
                        <h2><span style={style}>Name:</span> 5 Tips for Creatives Navigating a Coding Bootcamp</h2>

                        <h2>Link:
                             <a href="https://mcasimirian.medium.com/5-tips-for-creatives-navigating-a-coding-bootcamp-58b2e19bbcf0"> Blog </a> </h2>
                        <img className="blogIG" alt="" src="https://miro.medium.com/max/700/1*-VKOD5WrqdjNxIJy7C0_iw.gif"></img>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
}
export default Blogs
