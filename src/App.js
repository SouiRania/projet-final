
import './App.css';
import Header from './Header';

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";


import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/about"
          element={<About />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact />}
        />
      </Routes>


      
    </div>
  );
}

export default App;
