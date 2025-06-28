import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
