import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import VideoKyc from './component/multistepform/VideoKyc';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video-kyc" element={<VideoKyc />} /> 


      </Routes>
    </>
  );
}

export default App;
