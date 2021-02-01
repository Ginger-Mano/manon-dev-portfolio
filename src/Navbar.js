import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    state = {
        menuClicked: false
    }

    sidebarMenu = () => {
        this.setState({
            menuClicked: !this.state.menuClicked
        })
    }

    navbarClose = () => {
        this.setState({
            menuClicked: !this.state.menuClicked
        })
    }
    render() {
        return (

            <div className="main">

                <div className="navDiv">

                    <div className="topnav" onClick={this.sidebarMenu}>
                        <div>
                            <div className="menuline"></div>
                            <div className="menuline" onClick={this.sidebarMenu}></div>
                            <div className="menuline"></div>


                        </div>

                        <div className="navbarTitleCont">
                            <h3 className="navbarTitle">manon sainton - software engineer</h3>
                        </div>

                    </div>


                </div>

                {
                    this.state.menuClicked ?
                        <div className="sidebar">
                            <h3 className="navClose" onClick={this.sidebarMenu}>X</h3>
                            <Link to="/devHome2"><a href="#">Home</a></Link>
                            <Link to="/aboutMe"><a href="#">About</a></Link>
                            <Link to="/projects"><a href="#">Projects</a></Link>
                            <Link to="/blogs"><a href="#">Blogs</a></Link>
                        </div> : null
                }
            </div >


        )
    }
}
export default Navbar