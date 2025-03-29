import './App.css';
import Navbar from './component/Navbar/nav';
import Contact from './component/ContactMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Education from './component/Education/Education';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/eduction" element={<Education/>}/>
        </Routes>

      </div>
    </Router>
    
  );
}

export default App;

