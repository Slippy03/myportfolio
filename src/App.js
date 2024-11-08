import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title=`My Portfolio`
  })
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <br/>
      <br/>
      <br/>
      <br/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
