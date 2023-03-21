import "./App.css";
import About from './component/About';
import Portfolio from './component/Portfolio'; 
import Contact from './component/Contact';
import Resume from './component/Resume';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/resume" element={<Resume/>}></Route>

          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
