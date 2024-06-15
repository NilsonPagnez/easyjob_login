import './App.css';
import Header from './Containers/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Containers/Footer/Footer.jsx';
import LoginForms from './Pages/Login/LoginForms.jsx';
import Sobre from './Pages/Sobre/Sobre.jsx';
import Servicos from './Pages/Servicos/Servicos.jsx';
import Contato from './Pages/Contato/Contato.jsx';
import User from './Pages/User/User';
import { AuthProvider } from './Context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> 

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<LoginForms />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Servicos' element={<Servicos />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/User' element={<User />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
