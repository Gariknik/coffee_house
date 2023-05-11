import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "../components/Header";
import HomeCoffee from "../pages/HomeCoffee";
import OurCoffee from "../pages/OurCoffee";
import ForYourPleasure from "../pages/ForYourPleasure";
import AboutItCard from "../pages/AboutItCard";
import ErrorPage from "../pages/ErrorPage";
import Footer from "../components/Footer";



const App = () => {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomeCoffee />} />
              <Route path="/our" element={<OurCoffee />} />
              <Route path="/about-it" element={<AboutItCard />} />
              <Route path="/for" element={<ForYourPleasure />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
};

export default App;

