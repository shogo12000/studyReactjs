import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navBar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonial from "./components/Testimonial/Testimonial";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  console.log(playState)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={"Programs"} h2={"Programs"} myid={"programs"} />
        <Programs />
        <Title title={"About"} h2={"About"} myid={"about"} />
        <About setPlayState={setPlayState} />
        <Title title={"Campus"} h2={"Campus"} myid={"campus"} />
        <Campus />
        <Title
          title={"Testimonials"}
          h2={"Testimonials"}
          myid={"testimonials"}
        />
        <Testimonial />
        <Title title={"Contact Us"} h2={"Get in Touch"} myid={"contact"} />
        <Contact />

        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
