import {Route, Routes} from 'react-router-dom';
import Home from "./Components/Home.jsx";
// import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import './index.css';
import Navbar from './Components/Navbar.jsx';

function App(){
  return(
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        {/* <Route path='/Projects' element = {<Projects />} /> */}
        <Route path='/About' element = {<About />} />
        <Route path='/Contact' element = {<Contact />} />

      </Routes>
    </div>
  );

}

export default App;