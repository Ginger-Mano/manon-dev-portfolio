import './App.css';
import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import DevHome from "./DevHome"
import DevHome2 from "./DevHome2"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Blogs from "./Blogs";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


library.add(fab, faGithubSquare)

class App extends Component {

  render() {
    return (

      <div className="App">

        <Switch>
          <Route exact path="/" render={() => <DevHome />} />
          <Route exact path="/devHome2" render={() => <DevHome2 />} />
          <Route path="/aboutMe" render={() => <AboutMe />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/blogs" render={() => <Blogs />} />
        </Switch>

        {/* <div>
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
        </div> */}

      </div>
    )
  }
}

export default App;
