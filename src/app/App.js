import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";


import Header from "../components/Header";
import HomeCoffee from "../pages/HomeCoffee";
import OurCoffee from "../pages/OurCoffee";
import ForYourPleasure from "../pages/ForYourPleasure";
import AboutItCard from "../pages/AboutItCard";
import ErrorPage from "../pages/ErrorPage";
import Footer from "../components/Footer";

import {data} from '../enteries/data-default'


const App = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleCardClick = (id) => {
        setSelectedItemId(id);
    };

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomeCoffee />} />
              <Route path="/our" element={<OurCoffee data={data} handleCardClick={handleCardClick}/>} />
              <Route path="/about-it" element={<AboutItCard data={data} id={selectedItemId}/>} />
              <Route path="/for" element={<ForYourPleasure data={data}/>} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
};

export default App;

