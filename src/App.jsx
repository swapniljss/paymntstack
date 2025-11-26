import { Route, Routes } from 'react-router-dom';
import './App.css';

import HelloUser from './Pages/Login/HelloUser';
import Registration from './Pages/Registration';
import VideoKyc from './component/multistepform/VideoKyc';
import VerifyDetails from './Pages/VerifyDetails';
import MerchantType from './Pages/MerchantType';
import NeedKyc from './Pages/NeedKyc';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloUser />} />
        <Route path="/forms" element={<Registration />} />
        <Route path="/video-kyc" element={<VideoKyc />} />
        <Route path='verifydetails' element={<VerifyDetails/>} />
        <Route path='/merchant-type' element={<MerchantType/>} />
        <Route path='/needkyc' element={<NeedKyc/>} />
      </Routes>
    </>
  );
}

export default App;
