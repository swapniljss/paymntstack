import axios from "axios";

const BASE_URL = "http://10.20.40.94:7060/pymntstack/kyc";

// 1. Validate Aadhaar Exists
export const validateAadhaar = (mobile_number, aadhaar_number) => {
  return axios.post(`${BASE_URL}/third-party/aadhaar/validate`, {
    mobile_number,
    id_number: aadhaar_number,
  });
};

// 2. Generate OTP
export const generateAadhaarOtp = (aadhaar_number) => {
  return axios.post(`${BASE_URL}/third-party/aadhaar/generate-otp`, {
    id_number: aadhaar_number,
  });
};

// 3. Verify OTP
export const verifyAadhaarOtp = (mobile_number, otp, txn_id) => {
  return axios.post(`${BASE_URL}/third-party/aadhaar/verify-otp`, {
    mobile_number,
    otp,
    txn_id,
  });
};
