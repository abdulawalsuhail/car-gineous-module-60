import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home/Home';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
