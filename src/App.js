import { Route, Routes } from 'react-router-dom';
import Camera from './Pages/Camera/Camera';
import Home from './Pages/Home/Home/Home';
import Laptop from './Pages/Laptop/Laptop';
import Headphone from './Pages/LaptopAccessories/Headphone/Headphone';
import Keyboard from './Pages/LaptopAccessories/Keyboard/Keyboard';
import LaptopAccessories from './Pages/LaptopAccessories/LaptopAccessories';
import Mouse from './Pages/LaptopAccessories/Mouse/Mouse';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MiRouters from './Pages/MiRouters/MiRouters';
import Charger from './Pages/PhoneAccessories/Charger/Charger';
import EarPhone from './Pages/PhoneAccessories/EarPhone/EarPhone';
import PhoneAccessories from './Pages/PhoneAccessories/PhoneAccessories';
import PhoneCover from './Pages/PhoneAccessories/PhoneCover/PhoneCover';
import UsbCable from './Pages/PhoneAccessories/UsbCable/UsbCable';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Smartphone from './Pages/Smartphone/Smartphone';
import Tablets from './Pages/Tablets/Tablets';
import Tv from './Pages/Tv/Tv';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='smartphones' element={<Smartphone />} />
        {/* --- phone accessories --- */}
        <Route path='phone-accessories' element={<PhoneAccessories />} />
        <Route path='chargers' element={<Charger />} />
        <Route path='ear-phone' element={<EarPhone />} />
        <Route path='phone-cover' element={<PhoneCover />} />
        <Route path='usb-cable' element={<UsbCable />} />
        {/* --- end phone accessories --- */}
        <Route path='laptops' element={<Laptop />} />
        {/* --- laptops accessories --- */}
        <Route path='laptops-accessories' element={<LaptopAccessories />} />
        <Route path='headphones' element={<Headphone />} />
        <Route path='keyboards' element={<Keyboard />} />
        <Route path='mouse' element={<Mouse />} />
        {/* --- end laptop accessories --- */}
        <Route path='tablets' element={<Tablets />} />
        <Route path='tv' element={<Tv />} />
        <Route path='mi-routers' element={<MiRouters />} />
        <Route path='camera' element={<Camera />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;