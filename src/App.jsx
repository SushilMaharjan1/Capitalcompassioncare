import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resource from "./components/Resource/Resource";
import Careers from "./components/Careers/Careers";
import Contacts from "./components/Contacts/Contacts";
import NavBar from './components/NavBar/NavBar';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import FAQ from "./components/FAQ/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import './styles/colors.css';
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
