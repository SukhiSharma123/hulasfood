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

function App() {
  return (
    <>
    <Header />
    <Slider />
    <Services />
    <MenuPage />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;