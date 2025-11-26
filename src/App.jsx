import { Route, Routes } from 'react-router-dom';
import './App.css';

import HelloUser from './Pages/Login/HelloUser';
import Registration from './Pages/Registration';
import VideoKyc from './component/multistepform/VideoKyc';
import VerifyDetails from './component/multistepform/VerifyDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloUser />} />
        <Route path="/forms" element={<Registration />} />
        <Route path="/video-kyc" element={<VideoKyc />} />
        <Route path='verifydetails' element={<VerifyDetails/>} />
      </Routes>
    </>
  );
}

export default App;
