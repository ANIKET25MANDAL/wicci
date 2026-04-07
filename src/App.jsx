import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/home/home';
import AboutUs from './pages/about_us/about_us';
import LeadACouncil from './pages/lead_a_council/lead_a_council';
import OfficeBearers from './pages/office_bearers/office_bearers';
import Brochure from './pages/brochure/brochure';
import Press from './pages/press/press';
import Conferences from './pages/conferences/conferences';
import Awards from './pages/awards/awards';
import Recommendations from './pages/recommendations/recommendations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/lead-a-council" element={<LeadACouncil />} />
          <Route path="/office-bearers" element={<OfficeBearers />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/press" element={<Press />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
