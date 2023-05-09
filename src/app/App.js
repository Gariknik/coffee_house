import styled from 'styled-components';
import Header from "../components/Header";
import HomeCoffee from "../pages/HomeCoffee";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <HomeCoffee/>
      </BrowserRouter>
  );
};

export default App;

