import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import HowToUse from './pages/HowToUse';
import HowToAccept from './pages/HowToAccept';
import Security from './pages/Security';
import Company from './pages/Company';

function App() {
  return (
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/howtouse" element={<HowToUse />} />
          <Route path="/howtoaccept" element={<HowToAccept />} />
          <Route path="/security" element={<Security />} />
          <Route path="/company" element={<Company />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
