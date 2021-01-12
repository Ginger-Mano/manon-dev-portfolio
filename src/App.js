import './App.css';
import React, { Component } from "react"

class App extends Component {
  state = {
    button: false,
    backgroundChange: false,
    addAboutHover: false,
    addBlogHover: false,
    addProjHover: false
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

  render() {
    return (
      this.state.backgroundChange ?

        <div className="Appchange">
          <div>
            <div className="title1">
              <span className="span">m</span>
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

          {this.state.button ? <img className="img" onMouseOver={this.hoverAboutDesc} onMouseLeave={this.noAboutDesc} alt="" src="https://static.thenounproject.com/png/415376-200.png" /> : null}
          {this.state.addAboutHover ? <h2 className="imgtext">About Me</h2> : null}

          {this.state.button ? <img className="imgtop" alt="" onMouseOver={this.hoverProjDesc} onMouseLeave={this.noProjDesc} src="https://static.thenounproject.com/png/12565-200.png" /> : null}
          {this.state.addProjHover ? <h2 className="imgtoptext">Projects</h2> : null}


          {this.state.button ? <img className="imgright" alt="" onMouseOver={this.hoverBlogDesc} onMouseLeave={this.noBlogDesc} src="https://static.thenounproject.com/png/1087123-200.png" /> : null}
          {this.state.addBlogHover ? <h2 className="imgrighttext">Blogs</h2> : null}

          <div className="start">
            <button className="startB" onClick={this.startBClicked}>Start <br></br> here</button>
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
