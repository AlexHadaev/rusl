import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ScrollToTop from './utils/scrollToTop';
import Project from "./components/project/Project";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/project/:id" element={<Project/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
