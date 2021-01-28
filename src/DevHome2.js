import './App.css';
import React, { Component } from "react"
import { Link } from "react-router-dom"
// import useSound from 'use-sound';
import "./186669__fordps3__computer-boop.wav"


class DevHome2 extends Component {
    state = {
        button: true,
        backgroundChange: true,
        addAboutHover: false,
        addBlogHover: false,
        addProjHover: false,
        letterMHover: false,
        letterAHover: false,
        letterNHover: false,
        letterOHover: false,
        letterSHover: false,
        letterIHover: false,
        letterTHover: false,
        scaleAboutImg: false,

    }



    startBClicked = () => {

        this.setState({
            button: !this.state.button,
            backgroundChange: !this.state.backgroundChange
        })
    }

    hoverAboutDesc = () => {
        this.setState({
            addAboutHover: !this.state.addAboutHover
        })
    }

    hoverBlogDesc = () => {
        this.setState({
            addBlogHover: !this.state.addBlogHover
        })
    }

    noAboutDesc = () => {
        this.setState({
            addAboutHover: !this.state.addAboutHover
        })
    }

    noBlogDesc = () => {
        this.setState({
            addBlogHover: !this.state.addBlogHover
        })
    }

    hoverProjDesc = () => {
        this.setState({
            addProjHover: !this.state.addProjHover
        })
    }

    noProjDesc = () => {
        this.setState({
            addProjHover: !this.state.addProjHover
        })
    }

    mMove = () => {
        this.setState({
            letterMHover: !this.state.letterMHover,
        })
    }

    mFixed = () => {
        this.setState({
            letterMHover: !this.state.letterMHover,
        })
    }

    aMove = () => {
        this.setState({
            letterAHover: !this.state.letterAHover
        })
    }

    aFixed = () => {
        this.setState({
            letterAHover: !this.state.letterAHover
        })
    }

    nMove = () => {
        this.setState({
            letterNHover: !this.state.letterNHover
        })
    }

    nFixed = () => {
        this.setState({
            letterNHover: !this.state.letterNHover
        })
    }

    iMove = () => {
        this.setState({
            letterIHover: !this.state.letterIHover
        })
    }

    iFixed = () => {
        this.setState({
            letterIHover: !this.state.letterIHover
        })
    }

    oMove = () => {
        this.setState({
            letterOHover: !this.state.letterOHover
        })
    }

    oFixed = () => {
        this.setState({
            letterOHover: !this.state.letterOHover
        })
    }

    sMove = () => {
        this.setState({
            letterSHover: !this.state.letterSHover
        })
    }

    sFixed = () => {
        this.setState({
            letterSHover: !this.state.letterSHover
        })
    }

    tMove = () => {
        this.setState({
            letterTHover: !this.state.letterTHover
        })
    }

    tFixed = () => {
        this.setState({
            letterTHover: !this.state.letterTHover
        })
    }

    hoverAboutImg = () => {
        this.setState({
            scaleAboutImg: !this.state.scaleAboutImg
        })
    }
    hoverAboutImgFixed = () => {
        this.setState({
            scaleAboutImg: !this.state.scaleAboutImg
        })
    }

    render() {

        return (
            this.state.backgroundChange ?

                <div className="Appchange">
                    <div>
                        <div className="title3">

                            {this.state.letterMHover ? <span className="letterAnim" onMouseOver={this.mMove} onMouseLeave={this.mFixed}>m</span> : <span className="letterfixed" onMouseOver={this.mMove} onMouseLeave={this.mfixed}>m</span>}

                            {this.state.letterAHover ? <span className="letterAnim2" onMouseOver={this.aMove} onMouseLeave={this.aFixed}>a</span> : <span className="letterfixed" onMouseOver={this.aMove} onMouseLeave={this.afixed}>a</span>}

                            {this.state.letterNHover ? <span className="letterAnim" onMouseOver={this.nMove} onMouseLeave={this.nFixed}>n</span> : <span className="letterfixed" onMouseOver={this.nMove} onMouseLeave={this.nfixed}>n</span>}

                            {this.state.letterOHover ? <span className="letterAnim2" onMouseOver={this.oMove} onMouseLeave={this.oFixed}>o</span> : <span className="letterfixed" onMouseOver={this.oMove} onMouseLeave={this.ofixed}>o</span>}

                            {this.state.letterNHover ? <span className="letterAnim" onMouseOver={this.nMove} onMouseLeave={this.nFixed}>n</span> : <span className="letterfixed" onMouseOver={this.nMove} onMouseLeave={this.nfixed}>n</span>}

                            <span> </span>
                            {!this.state.letterSHover ? <span className="letterAnim2" onMouseOver={this.sMove} onMouseLeave={this.sFixed}>s</span> : <span className="letterfixed" onMouseOver={this.sMove} onMouseLeave={this.sfixed}>s</span>}

                            {this.state.letterAHover ? <span className="letterAnim" onMouseOver={this.aMove} onMouseLeave={this.aFixed}>a</span> : <span className="letterfixed" onMouseOver={this.aMove} onMouseLeave={this.afixed}>a</span>}

                            {this.state.letterIHover ? <span className="letterAnim2" onMouseOver={this.iMove} onMouseLeave={this.iFixed}>i</span> : <span className="letterfixed" onMouseOver={this.iMove} onMouseLeave={this.ifixed}>i</span>}

                            {this.state.letterNHover ? <span className="letterAnim" onMouseOver={this.nMove} onMouseLeave={this.nFixed}>n</span> : <span className="letterfixed" onMouseOver={this.nMove} onMouseLeave={this.nfixed}>n</span>}

                            {this.state.letterTHover ? <span className="letterAnim2" onMouseOver={this.tMove} onMouseLeave={this.tFixed}>t</span> : <span className="letterfixed" onMouseOver={this.tMove} onMouseLeave={this.tfixed}>t</span>}

                            {this.state.letterOHover ? <span className="letterAnim" onMouseOver={this.oMove} onMouseLeave={this.oFixed}>o</span> : <span className="letterfixed" onMouseOver={this.oMove} onMouseLeave={this.ofixed}>o</span>}

                            {this.state.letterNHover ? <span className="letterAnim2" onMouseOver={this.nMove} onMouseLeave={this.nFixed}>n</span> : <span className="letterfixed" onMouseOver={this.nMove} onMouseLeave={this.nfixed}>n</span>}
                        </div>

                        <h6 className="title22">Software Engineer</h6>
                    </div>


                    {this.state.button ? <Link to="/aboutMe"><img className="img" onMouseOver={this.hoverAboutDesc} onMouseLeave={this.noAboutDesc} alt="" src="https://static.thenounproject.com/png/415376-200.png" /></Link> : null}
                    {this.state.addAboutHover ? <h2 className="imgtext">About Me</h2> : null}


                    {this.state.button ? <Link to="/projects"><img className="imgtop" alt="" onMouseOver={this.hoverProjDesc} onMouseLeave={this.noProjDesc} src="https://static.thenounproject.com/png/12565-200.png" /></Link> : null}
                    {this.state.addProjHover ? <h2 className="imgtoptext">Projects</h2> : null}


                    {this.state.button ? <Link to="/blogs"><img className="imgright" alt="Read!" onMouseOver={this.hoverBlogDesc} onMouseLeave={this.noBlogDesc} src="https://static.thenounproject.com/png/1299097-200.png" /></Link> : null}
                    {this.state.addBlogHover ? <h2 className="imgrighttext">Blogs</h2> : null}

                    <div className="start">
                        <Link to="/"><button className="startBclicked" onClick={this.startBClicked}>Start <br></br> here</button></Link>
                    </div>
                </div> :

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
                        <button className="startB" onClick={this.startBClicked}>Start <br></br> here</button>
                    </div>
                </div>
        )
    }
}

export default DevHome2;