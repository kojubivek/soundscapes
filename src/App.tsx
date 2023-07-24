import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Head } from "./components/Head";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { styled } from "styled-components";

const HeaderContainer = styled.div`
  height: 30vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <HeaderContainer>
        <Head></Head>
      </HeaderContainer>
      <Hero></Hero>
      <Footer></Footer>

      <></>
    </>
  );
}

export default App;
