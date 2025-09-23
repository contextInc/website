import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import HowToAccept from './pages/HowToAccept';
import Company from './pages/Company';
import Price from './pages/Price';
import QA from './pages/QA';
import PrivacyTwo from './pages/PrivacyTwo';

function App() {
  return (
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/howtouse" element={<HowToUse />} />
          <Route path="/howtoaccept" element={<HowToAccept />} />
          {/* <Route path="/security" element={<Security />} /> */}
          <Route path="/company" element={<Company />} />
          <Route path="/privacy" element={<PrivacyTwo />} />
          <Route path="/price" element={<Price />} />
          <Route path="/qa" element={<QA />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
