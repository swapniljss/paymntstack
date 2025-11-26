import { Route, Routes } from 'react-router-dom';
import './App.css';

import HelloUser from './Pages/Login/HelloUser';
import Registration from './Pages/Registration';
import VideoKyc from './component/multistepform/VideoKyc';
import VerifyDetails from './Pages/VerifyDetails';
import NeedKyc from './Pages/NeedKyc';
import MerchantType from './Pages/MerchantType';

import PartnershipFlow from './component/standalonepages/PartnershipFlow';
import CompanyFlow from './component/standalonepages/CompanyFlow';
import IndividualFlow from './component/standalonepages/IndividualFlow';
import TrustFlow from './component/standalonepages/TrustFlow';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloUser />} />
        <Route path="/forms" element={<Registration />} />
        <Route path="/video-kyc" element={<VideoKyc />} />
        <Route path='verifydetails' element={<VerifyDetails />} />
        <Route path='/needkyc' element={<NeedKyc />} />
        <Route path='/merchant-type' element={<MerchantType />} />

        {/* Standalone pages */}
        <Route path='/partnership-flow' element={<PartnershipFlow />} />
        <Route path='/company-flow' element={<CompanyFlow />} />
        <Route path='/individual-flow' element={<IndividualFlow />} />
        <Route path='/trust-flow' element={<TrustFlow />} />

        <Route path="/video-kyc" element={<VideoKyc />} />


      </Routes>
    </>
  );
}

export default App;
