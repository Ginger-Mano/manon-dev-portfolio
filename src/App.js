import './App.css';
import React, { Component } from "react"

class App extends Component {
  state = {
    button: false,
    backgroundChange: false,
    addhover: false
  }

  startBClicked = () => {
    this.setState({
      button: !this.state.button,
      backgroundChange: !this.state.backgroundChange
    })
  }

  hoverDesc = () => {
    this.setState({
      addhover: !this.state.addhover
    })
  }
  render() {
    return (
      this.state.backgroundChange ?

        <div className="Appchange">
          <div className="title">
            <h2 className="title1">manon sainton</h2>
            <h6 className="title2">Software Engineer</h6>
          </div>
          {this.state.button ? <img className="img" onMouseLeave={this.hoverDesc} alt="" src="https://c0.wallpaperflare.com/preview/66/740/843/programmer-computer-woman-support.jpg" /> : null}
          {this.state.addhover ? <h6>About Me</h6> : null}

          {this.state.button ? <img className="imgtop" alt="" src="https://i.dlpng.com/static/png/6759622_preview.png" /> : null}


          {this.state.button ? <img className="imgright" alt="" src="https://library.kissclipart.com/20180908/toe/kissclipart-clip-art-notebook-clipart-notebook-clip-art-373d6e0403ed6cf2.png" /> : null}

          <div className="start">
            <button className="startB" onClick={this.startBClicked}>Start <br></br> here</button>
          </div>
        </div> :

        <div className="App">
          <div className="title">
            <h2 className="title1">manon sainton</h2>
            <h6 className="title2">Software Engineer</h6>
          </div>
          {this.state.button ? <img className="img" alt="" src="https://c0.wallpaperflare.com/preview/66/740/843/programmer-computer-woman-support.jpg" /> : null}

          {this.state.button ? <img className="imgtop" alt="" src="https://i.dlpng.com/static/png/6759622_preview.png" /> : null}

          {this.state.button ? <img className="imgright" alt="" src="https://library.kissclipart.com/20180908/toe/kissclipart-clip-art-notebook-clipart-notebook-clip-art-373d6e0403ed6cf2.png" /> : null}

          <div className="start">
            <button className="startB" onClick={this.startBClicked}>Start <br></br> here</button>
          </div>
        </div>
    )
  }
}

export default App;
