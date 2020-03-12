import React, { Component } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navigation from "./components/Navigation/Navigation";

export default class App extends Component {
  state = {
    theme: "light",
    hash: '#home'
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const lastScrollY = window.scrollY;
    window.requestAnimationFrame(() => {
      this.setState({ theme: lastScrollY > 717 ? "dark" : "light" });
      this.setState({ hash: window.location.hash });
    });
  };
  render() {
    return (
      <div className="App">
        <Navigation hash={this.state.hash}>{this.state.theme}</Navigation>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}
