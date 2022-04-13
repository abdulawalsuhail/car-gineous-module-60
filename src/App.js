import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
