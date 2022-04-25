import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import AddService from './pages/AddService/AddService';
import CheckOut from './pages/checkOut/CheckOut';
import Home from './pages/home/Home/Home';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import RequireAuth from './pages/login/RequireAuth/RequireAuth';
import ManageServices from './pages/manageServices/ManageServices';
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
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService/>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices/>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
