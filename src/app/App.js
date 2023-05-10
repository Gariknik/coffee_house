import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "../components/Header";
import HomeCoffee from "../pages/HomeCoffee";
import Footer from "../components/Footer";


const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <HomeCoffee />
        <Footer/>
      </BrowserRouter>
  );
};

export default App;

