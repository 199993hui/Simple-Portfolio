import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Blogs from "./blogs/Blogs";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Certifications from "./certifications/Certifications";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Blogs /> 
        <WorkExperience />
        <Projects />
        <Certifications />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
