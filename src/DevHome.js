import './App.css';
import React, { Component } from "react"
import { Link } from "react-router-dom"


class DevHome extends Component {
    state = {
        button: false,
        backgroundChange: false,
    }

    startBClicked = () => {
        this.setState({
            button: !this.state.button,
            backgroundChange: !this.state.backgroundChange
        })
    }

    render() {
        return (

            <div className="App">
                <div>
                    <div className="title1">
                        <span>m</span>
                        <span>a</span>
                        <span>n</span>
                        <span>o</span>
                        <span>n</span>
                        <span> </span>
                        <span>s</span>
                        <span>a</span>
                        <span>i</span>
                        <span>n</span>
                        <span>t</span>
                        <span>o</span>
                        <span>n</span>
                    </div>
                    <h6 className="title2">Software Engineer</h6>
                </div>

                <div className="start">
                    <Link to="/devHome2"><button className="startB" onClick={this.startBClicked}>Start <br></br> here</button></Link>
                </div>
            </div>
        )
    }
}

export default DevHome;
