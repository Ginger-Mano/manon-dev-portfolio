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


      </div>
    )
  }
}

export default App;
