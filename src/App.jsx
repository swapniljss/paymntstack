import { Route, Routes } from 'react-router-dom';
import './App.css';

import HelloUser from './Pages/Login/HelloUser';
import Registration from './Pages/Registration';
import VideoKyc from './component/multistepform/VideoKyc';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloUser />} />
        <Route path="/forms" element={<Registration />} />
        <Route path="/video-kyc" element={<VideoKyc />} />
      </Routes>
    </>
  );
}

export default App;
