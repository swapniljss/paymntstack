

import React, { useState, useCallback, useEffect, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import axios from '../../Api/axios';
// import validator from "@rjsf/validator-ajv6";
// import Form from "@rjsf/core";
// import jwt_decode from "jwt-decode";
import Box from '@mui/material/Box';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { useAuth } from '../../Hooks/useAuth';
import LeftSide from './leftSide';
// import SomethingWentWrong from '../../Components/SomethingWentWrong';

import './style.css';

const schema = {
    "type": "object",
    "required": ["phone", "password"],
    "properties": {
        "phone": {
            "title": "Mobile No",
            "type": "string",
            "format": "string"
        },
        "password": {
            "title": "Password",
            "type": "string"
        }
    }
};

const uiSchema = {
    "ui:submitButtonOptions": {
        "props": {
            "className": "BBPFBtn"
        }
    },
    "phone": {
        "ui:placeholder": "Enter Mobile No "
    },
    "password": {
        "ui:widget": "password",
        "ui:placeholder": "Enter Password"
    }
};

const Login = () => {

    // const { setAuth, persist, setPersist } = useAuth();

    let navigate = useNavigate();
    let location = useLocation();

    const from = (location.state && location.state.from.pathname) || "/dashboard";

    const [extraErrors, setExtraErrors] = useState({});
    const [errorDialog, setErrorDialog] = useState(false);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    // let yourForm;
    // const onSubmitNew = () => {
    //     yourForm.formElement.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    // };

    // const onFormSubmit = (formData) => {
    //     setFormData(formData);
    //     handleLogin(formData);
    // };

    // const handleLogin = useCallback(async (data) => {
    //     try {
    //         setLoading(true);
    //         let url = `auth/login`;
    //         let options = {
    //             method: 'POST',
    //             url,
    //             data,
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             withCredentials: true
    //         };
    //         await axios(options).then(response => {
    //             if (response.data.status === 1) {
    //                 let temToken = response.data.token.replace('Bearer', '');
    //                 let decoded = jwt_decode(temToken);
    //                 console.log(decoded)
    //                 const token = response.data.token;
    //                 const id = decoded.id;
    //                 const name = decoded.name;
    //                 const username = decoded.username;
    //                 const permissions = decoded.permissions;
    //                 const payee = decoded.payee;
    //                 const role = [decoded.role];
    //                 localStorage.setItem("token", token);
    //                 setAuth({ name, username, id, permissions, role, token ,payee });
    //                 localStorage.setItem("persist", true);
    //                 setPersist(true);
    //                 setExtraErrors({});
    //                 navigate(from, { replace: true });
    //             } else {
                    
    //                 let tempErr = { ...extraErrors };
    //                 tempErr.phone = { __errors: [response.data.message.phone] }
    //                 tempErr.password = { __errors: [response.data.message.password] }
    //                 setExtraErrors(tempErr);
    //             }
    //             setLoading(false);
                
    //         }).catch(err => {
    //             if (err.response) {
    //                 setLoading(false);
    //                 setErrorDialog(true);
    //                 console.error('err.res', err.response.data);
                    
    //             }
    //         });
    //     } catch (error) {
    //         setLoading(false);
    //         setErrorDialog(true);
    //         console.error('error', error);
    //     }
    //     // eslint-disable-next-line 
    // }, [extraErrors]);

    // useEffect(() => {
    //     localStorage.setItem("persist", persist);
    // }, [persist]);

    return (
        <Fragment>
            {/* <SomethingWentWrong open={errorDialog} setOpen={setErrorDialog} /> */}
            <Box component="div" className={'BBPLoginPage'}>
                <LeftSide />
                <Box component="div" className={'BBPLPForm'}>
                    <Box component="div" className={'BBPLPFInner'}>
                        <Box component="div" className={'BBPLPFITitle'} >
                       <p  className='amaticscfont'>WELCOME TO PAYMNT<span style={{color:"#FFC700" }} className='amaticscfont'>STACK</span></p> 
                        </Box>
                        <Box component="div" className={'BBPLPFIInput'}>
                            <Box component='div' className={'BBPForm'}>
                                {/* <Form
                                    schema={schema}
                                    uiSchema={uiSchema}
                                    formData={formData}
                                    validator={validator}
                                    showErrorList={false}
                                    omitExtraData={true}
                                    onSubmit={({ formData }) => {
                                        onFormSubmit(formData);
                                    }}
                                    extraErrors={extraErrors}
                                    ref={(form) => { yourForm = form; }}
                                /> */}
                                {/* <Box component="div" className={'BBPLPFIIBtn'}>
                                    <LoadingButton
                                        className={'BBPButton'}
                                        loading={loading}
                                        disabled={loading}
                                        // onClick={onSubmitNew}
                                    >Submit</LoadingButton>
                                </Box> */}
                            </Box>
                        </Box>
                        {/* <Box component="div" className={'BBPLPFIBottom'}>
                            Before proceeding, please read and agree to <br />
                            <NavLink to="/">Terms and Conditions</NavLink> & <NavLink to="/">Privacy policy</NavLink>
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Login;