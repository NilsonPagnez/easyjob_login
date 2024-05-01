import './App.css';
import Header from './Containers/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Containers/Footer/Footer.jsx';
import LoginForms from './Pages/Login/LoginForms.jsx';
import Sobre from './Pages/Sobre/Sobre.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<LoginForms/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
