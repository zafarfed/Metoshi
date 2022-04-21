import React, { useContext } from "react";

import About from "../../components/About";
import Main2 from "../../components/Main2";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import { Container } from "./style";
import Footer from "../../components/Footer";
import { Fals } from "../../context/context";

export const Home = () => {
  const [isOpen, setIsopen] = useContext(Fals)
  return (
    <Container >
      <Container.Body>
        <Navbar />
        <Main2 />
        <Main />
        <About />
        <Contact />
        <Footer />
      </Container.Body>
    </Container>
  );
};
export default Home;
