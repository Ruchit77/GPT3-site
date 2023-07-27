import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt3,
  Header,
} from "./containers/index"; // imported from index.js in that folder
import { Cta, Brand, Navbar } from "./components"; // imported from index.js in that folder

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
