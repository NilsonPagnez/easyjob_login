import './App.css';
import Header from './Containers/Header/Header';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
