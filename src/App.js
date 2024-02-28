
import './App.css';
import Header from './components/Header';

import { Routes, Route,} from "react-router-dom";

import Contact from './components/Contact';
import Home from './components/Home';
import Gateaux from './components/Gateaux';
import GateauxRecette from './components/GateauxRecette';
import Macarons from './components/Macarons';
import MacaronsRecette from './components/MacaronsRecette';
import Footer from './components/Footer';
import Hlou from './components/Hlou';
import HlouRecette from './components/HlouRecette';

import Materiels from './components/Materiels';

function App() {

  return (
    <div className="App">
     
      <Header />
     
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/Gateaux" element={<Gateaux/>}/>
       
        <Route path="/Macarons" element={<Macarons/>}/>
        <Route path="/Hlou" element={<Hlou/>}/>
        <Route path="/Materiels" element={<Materiels/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/:id" element={<GateauxRecette></GateauxRecette>} />
        <Route path="/Macaron/:id" element={<MacaronsRecette></MacaronsRecette>} />
        <Route path="/Hlou/:id" element={<HlouRecette/>} />
        
      </Routes>
     
      <Footer/>

      
    </div>
  );
}

export default App;
