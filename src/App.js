// import './App.css';
import './Assets/css/style.css';
import './Assets/css/responsive.css';
import './Assets/css/slick.css';
import './Assets/css/slick-theme.css';
import './Assets/css/rsmenu-main.css';
import './Assets/css/rsmenu-transitions.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Pages/Header';
import Slider from './Pages/Slider';
import Services from './Pages/Services';
import MenuPage from './Pages/MenuPage';
import Testimonial from './Pages/Testimonial';
import BrandLogo from './Pages/BrandLogo';
import Footer from './Pages/Footer';
import OurVideo from './Pages/OurVideo';
import CompanyMembers from './Pages/CompanyMembers';
import AssociateCompany from './Pages/AssociateCompany';

function App() {
  return (
    <>
    <Header />
    <Slider />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/associate-company' element={<AssociateCompany/>} />
      </Routes>
      <Testimonial />
      <CompanyMembers />
      <BrandLogo />
      <OurVideo />
      <Footer />
    </>
  );
}

export default App;
