import './App.css';
import './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import DefaultLayout from './Components/layout/DefaultLayout';
import Stock from './pages/preview/StockPage';
import StockPage from './pages/preview/StockPage';
import Navbarlogin from './Components/navbar/Navbarlogin';
import DigitalPage from './pages/preview/DigitalPage';
import Footer from './Components/footer/Footer';
import CryptoPage from './pages/preview/CryptoPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import Createcourse from './pages/admin/Createcourse';
import ListCourse from './pages/admin/ListCourse';
import Imageadd from './pages/admin/Image';
import MultiStepForm from './pages/admin/MultiForm';
import VideoPlayer from './pages/videoplayer/VideoPlayer';
import SearchableList from './pages/videoplayer/Search';
import Navigation from './pages/videoplayer/Search';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<DefaultLayout><HomePage /></DefaultLayout>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/Signup' element={<SignUpPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/stock' element={<StockPage />} />
      <Route path='/digital' element={<DigitalPage />} />
      <Route path='/crypto' element={<CryptoPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/nav' element={<Navbarlogin />} />
      <Route path='/foot' element={<Footer />} />
      <Route path='/createcourse' element={<Createcourse />} />
      <Route path='/course/all' element={<ListCourse/>} />
      <Route path='/course/image' element={<Imageadd/>} />
      <Route path='/multi' element={<MultiStepForm/>} />
      <Route path='/video' element={<VideoPlayer/>} />
      <Route path='/search' element={<Navigation/>} />
    </Routes>
    </>
  );
}

export default App;
