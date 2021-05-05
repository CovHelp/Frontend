import React from 'react'
import { GoogleLogin } from "react-google-login";

const NeedHelp = () => {
    
    const successCallback = (data) => {
        console.log(data);
    };
    const failureCallback = (error) => {
        console.log(error);
        console.log("thius is google response");
    };

    return (
        <>
            <h1>NeedHelp</h1>

            <GoogleLogin
                clientId="1027672846288-1cplsl3m6pl2p3ngjn1k1msqr07s4at7.apps.googleusercontent.com"
                buttonText="Continue with google"
                uxMode="popup"
                redirectUri="https://mechaadii.web.app"
                onSuccess={successCallback}
                onFailure={failureCallback}
                cookiePolicy={"single_host_origin"}
            />
        </>
    )
}

export default NeedHelp
